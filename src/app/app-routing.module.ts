import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { GroupUsersListComponent } from './components/group-users-list/group-users-list.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'groups',
    component: GroupsComponent
  },
  {
    path: 'users/:id',
    component: EditUserComponent
  },
  {
    path: 'groups/:groupName/users',
    component: GroupUsersListComponent
  },
  {
    path: 'users/:id/details',
    component: UserDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
