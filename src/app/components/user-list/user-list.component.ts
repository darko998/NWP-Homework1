import { Component, Input, OnInit } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { GroupsService } from 'src/app/services/groups.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: User[]

  @Input() showGroupUsers: boolean

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private groupService: GroupsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.showGroupUsers) {
      this.activatedRoute.paramMap.subscribe(params => {
        const groupName: string = params.get('groupName');
        this.users = this.groupService.getMembers(groupName);
      })
    } else {
      this.userService.fetchUsers().subscribe(users => {
        this.users = users;
      })
    }
  }

  public deleteUser(id) {
    this.userService.deleteUser(id);
    this.router.navigate(['/home'])
      .then(() => {
        window.location.reload();
      });
  }

}
