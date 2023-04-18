import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

constructor(private http: HttpClient,) { }

  categories = []

  getCourses(){
    return this.http.get(environment.backendUrl+'/api/courses/');
  }

  getCourseById(id: any) {
    return this.http.get(environment.backendUrl+'/api/courses/'+id);
  }

  getCategories() {
    return this.http.get(environment.backendUrl + '/api/categories/').subscribe((data: any) => {
      this.categories = data
    })
  }
}
