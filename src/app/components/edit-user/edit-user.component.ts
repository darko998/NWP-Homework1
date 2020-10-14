import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public currUser: User

  public firstName: string = ''
  public lastName: string = ''

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id: number = Number(params.get('id'))

      this.userService.getUsers().subscribe((users: User[]) => {
        console.log(users)
        this.currUser = users.filter(user => user.id === id)[0]

        this.firstName = this.currUser.firstName;
        this.lastName = this.currUser.lastName;
      })
    })
  }

  public editUser() {
    this.router.navigate(['/home']);

    const editUser: User = {
      id: this.currUser.id,
      firstName: this.firstName,
      lastName: this.lastName
    }

    this.userService.editUser(editUser).subscribe(editedUser => {
      console.log(editedUser);
    })
  }

}
