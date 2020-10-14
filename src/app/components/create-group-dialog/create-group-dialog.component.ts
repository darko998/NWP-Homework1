import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Group } from 'src/app/models/group.model';
import { GroupsService } from 'src/app/services/groups.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-create-group-dialog',
  templateUrl: './create-group-dialog.component.html',
  styleUrls: ['./create-group-dialog.component.css']
})
export class CreateGroupDialogComponent implements OnInit {

  public groupName: string = ''

  constructor(public groupService: GroupsService,
    public dialogRef: MatDialogRef<HomeComponent>) { }

  ngOnInit(): void {

  }

  public createGroup() {
    this.dialogRef.close();

    this.groupService.addGroup(this.groupName, false);
  }
}
