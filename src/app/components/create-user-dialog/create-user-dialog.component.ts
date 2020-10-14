import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialogComponent implements OnInit {

  public firstName: string = ''
  public lastName: string = ''

  constructor(public userService: UserService,
    public dialogRef: MatDialogRef<HomeComponent>,
    private router: Router) { }

  ngOnInit(): void {

  }

  public createUser() {
    this.dialogRef.close();

    const newUser: User = {
      id: 0,
      firstName: this.firstName,
      lastName: this.lastName
    }

    this.userService.addUser(newUser).subscribe(users => {
      console.log(users);
    })

    this.router.navigate(['/home'])
      .then(() => {
        window.location.reload();
      });
  }

}
