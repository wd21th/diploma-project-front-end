import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

constructor(private http: HttpClient,) { }

  categories = []
  teacherCourses = []

  getCourses(queryString: string = ''){
    return this.http.get(environment.backendUrl + '/api/courses' + queryString);
  }

  getCourseById(id: any) {
    return this.http.get(environment.backendUrl+'/api/courses/'+id);
  }

  getCategories() {
    return this.http.get(environment.backendUrl + '/api/categories/').subscribe((data: any) => {
      this.categories = data
    })
  }

  addCourse(course: any) {
    return this.http.post(environment.backendUrl + '/api/courses/', course);
  }

  getTeacherCourses() {
    return this.http.get(environment.backendUrl + '/api/teachers/courses').subscribe((data: any) => {
      this.teacherCourses = data
    });
  }
}
