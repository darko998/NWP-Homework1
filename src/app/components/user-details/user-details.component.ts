import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/models/group.model';
import { User } from 'src/app/models/user.model';
import { GroupsService } from 'src/app/services/groups.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public firstName: string = ''
  public lastName: string = ''
  public chosenGroup: string

  public currUser: User
  public groups: Group[]


  constructor(private userService: UserService,
    private groupService: GroupsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id: number = Number(params.get('id'))

      if (this.userService.getUsers() != undefined) {
        this.userService.getUsers().subscribe((users: User[]) => {
          this.currUser = users.filter(user => user.id === id)[0]

          this.firstName = this.currUser.firstName;
          this.lastName = this.currUser.lastName;
        })
      }
    })


    this.groups = this.groupService.getGroups();
  }

  public putUserInGroup() {
    this.groupService.addMember(this.currUser, this.chosenGroup, false);
    this.router.navigate(['/home']);
  }

}
