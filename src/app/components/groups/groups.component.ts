import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group.model';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  public groups: Group[]

  constructor(private groupService: GroupsService) { }

  ngOnInit(): void {
    this.groups = this.groupService.getGroups();
  }

}
