import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http: HttpClient,) { }

  updateUser(user: any){
    return this.http.post(`/users/update/${user.id}`, user);
  }
}
