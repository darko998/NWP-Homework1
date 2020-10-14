import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly usersUrl = 'http://localhost:8080/users';
  private users: Observable<User[]>
  private newUser: Observable<User>
  private editedUser: Observable<User>

  constructor(private http: HttpClient) { }

  public addUser(user: User) {
    this.newUser = this.http.post<User>(this.usersUrl, user, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('JWT')
      }
    });

    this.fetchUsers();

    return this.newUser;
  }

  public editUser(user: User) {
    this.editedUser = this.http.put<User>(this.usersUrl, user, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('JWT')
      }
    });

    return this.editedUser;
  }

  public deleteUser(id) {

    this.http.delete(this.usersUrl + "/" + id, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('JWT')
      }
    }).toPromise();

    this.fetchUsers();
  }

  public getUsers() {
    if (this.users == undefined) {
      this.fetchUsers();
    }
    return this.users;
  }

  public fetchUsers() {
    this.users = this.http.get<User[]>(this.usersUrl, {
      headers: {
        'Authorization': "Bearer " + localStorage.getItem('JWT')
      }
    });
    return this.users;
  }
}
