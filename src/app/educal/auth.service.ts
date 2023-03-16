import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private http: HttpClient,
) { }

  check(user: any){
    return this.http.post(environment.backendUrl + '/api/login', user);
  }

  add(user: any){
    return this.http.post(environment.backendUrl + '/api/register', user);
  }

}
