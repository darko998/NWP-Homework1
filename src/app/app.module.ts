import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { GroupsComponent } from './components/groups/groups.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CreateUserDialogComponent } from './components/create-user-dialog/create-user-dialog.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateGroupDialogComponent } from './components/create-group-dialog/create-group-dialog.component';
import { GroupUsersListComponent } from './components/group-users-list/group-users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    GroupsComponent,
    UserListComponent,
    CreateUserDialogComponent,
    EditUserComponent,
    CreateGroupDialogComponent,
    GroupUsersListComponent,
    UserDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [
    CreateUserDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
