import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateGroupDialogComponent } from '../create-group-dialog/create-group-dialog.component';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createUser() {
    console.log("create user");
  }

  createGroup() {
    console.log("create group")
  }

  openDialogNewUser(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogNewGroup(): void {
    const dialogRef = this.dialog.open(CreateGroupDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
