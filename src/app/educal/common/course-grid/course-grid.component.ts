import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../courses.service';
import { UsersService } from '../../users.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.scss'],
})
export class CourseGridComponent implements OnInit {
  courses: any = [];
  user: any = {};
  courseData = [];
  constructor(
    public coursesService: CoursesService,
    public usersService: UsersService,
    public route: ActivatedRoute,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.route.queryParams.subscribe((params) => {
      let queryString = '';
      if (params['category']) {
        queryString = '?category=' + params['category'];
      }
      this.coursesService.getCourses(queryString).subscribe((data: any) => {
        
        this.courses = data;
      });
    });
  }

  buacyCourse(courseId: any) {
    // get user from local storage
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    user.courses.push(courseId);
    

    this.usersService.updateUser(user).subscribe((data: any) => {
      
      localStorage.setItem('user', JSON.stringify(data));
      this.user = data;
      this.getAllCourses();
    });
  }
}
