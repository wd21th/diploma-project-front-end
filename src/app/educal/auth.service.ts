import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private http: HttpClient,
) { }

  check(user: any){
    return this.http.post('/users/check/', user);
  }

  add(user: any){
    return this.http.post('/users/add/', user);
  }

}
