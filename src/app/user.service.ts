import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  baseUrl:string = 'http://localhost:9091/UserManage/users/';

  // Get All Users
  getUsers(){
    return this.http.get<User[]>(this.baseUrl);
  }
  // Get User By Id
  getUserById(id: number){
    return this.http.get<User>(this.baseUrl+id);
  }
  // Create User
  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }
  // Modify User
  updateUser(user: User) {
    return this.http.put(this.baseUrl , user);
  }
  // Delete User
  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
}
