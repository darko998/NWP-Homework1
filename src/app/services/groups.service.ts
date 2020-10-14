import { Injectable } from '@angular/core';
import { Group } from '../models/group.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private groups: Group[]

  constructor() {
    this.groups = [];

    let jsonGroups = JSON.parse(localStorage.getItem('groups'));
    console.log(jsonGroups);

    // Here we populate array 'groups' from local storage groups
    if (jsonGroups != null) {
      jsonGroups.forEach(item => {

        this.addGroup(item.groupName, true);

        if (item.users.length > 0) {
          item.users.forEach(user => {
            this.addMember(user, item.groupName, true);
          })
        }
      })
    }
  }

  public getGroups() {
    return this.groups;
  }

  // If we are calling this method from constructor, than we don't want to change local storage 'groups'
  public addGroup(groupName: string, fromConstructor: boolean) {

    let exist: boolean = false;

    this.groups.forEach(group => {
      if (group.groupName == groupName) {
        exist = true;
      }
    })

    if (!exist) {
      const newGroup: Group = {
        groupName: groupName,
        users: []
      }
      this.groups.push(newGroup);

      if (!fromConstructor)
        localStorage.setItem('groups', JSON.stringify(this.groups));
    }
  }

  public getMembers(groupName): User[] {
    let groupUsers: User[] = []

    this.groups.forEach((group) => {
      if (group.groupName == groupName) {
        groupUsers = group.users;
      }
    })
    return groupUsers;
  }

  public addMember(user: User, groupName: string, fromConstructor: boolean) {
    this.groups.forEach((group) => {
      if (group.groupName == groupName) {
        if (!group.users.some(u => { return u.firstName === user.firstName })) {
          group.users.push(user)
          if (!fromConstructor)
            localStorage.setItem('groups', JSON.stringify(this.groups));
        }
      }
    })
  }

  public clearGroup(groupName: string): void {
    this.groups.forEach((group) => {
      if (group.groupName == groupName) {
        group.users = []
      }
    })
  }
}
