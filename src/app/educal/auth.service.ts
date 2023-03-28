import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  private http: HttpClient,
) { }

  check(user: any){
    return this.http.post(environment.backendUrl + '/api/login', user).pipe(
      tap((res) => console.log(res))
    )
  }

  add(user: any){
    return this.http.post(environment.backendUrl + '/api/register', user).pipe(
      tap((res) => console.log(res))
    )
  }

}
