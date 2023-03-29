import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http: HttpClient,) { }

  updateUser(user: any){
    return this.http.post(`/users/update/${user.id}`, user);
  }

  buyCourse(courseId: any) {
    return this.http.post(environment.backendUrl + '/api/users/course/buy', {
      courseId: courseId
    });
  }
}
