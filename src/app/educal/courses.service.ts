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

  updateCourse(id: string, course: any) {
    return this.http.put(environment.backendUrl + '/api/courses/' + id, course);
  }

  deleteCourse(id: string) {
    return this.http.delete(environment.backendUrl + '/api/courses/' + id);
  }

  attachFile(id: string, formData: any) {
    return this.http.post(environment.backendUrl + '/api/attach-file/' + id, formData);
  }

  updateAttachFile(id: string, formData: any) {
    return this.http.put(environment.backendUrl + '/api/attach-file/' + id, formData);
  }

  getTeacherCourses() {
    return this.http.get(environment.backendUrl + '/api/teachers/courses').subscribe((data: any) => {
      this.teacherCourses = data
    });
  }

  downloadFile() {
    return this.http.get('https://firebasestorage.googleapis.com/v0/b/bilim-all.appspot.com/o/files%2FCSA%20lab3.pdf?alt=media&token=5c62bbd4-c601-44ba-a195-848987d81a39', { responseType: 'blob' });
  }
}
