import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../courses.service';
import { UsersService } from '../../users.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courseData = [];

  courses: any = [];
  user: any = {};

  constructor(
    public coursesService: CoursesService,
    public usersService: UsersService,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.coursesService.getCourses().subscribe((data: any) => {
      this.courses = data;
    });
  }

  buyCourse(courseId: any) {
    // get user from local storage
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    user.courses.push(courseId);

    this.usersService.updateUser(user).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      this.user = data;
      this.getAllCourses();
    });
  }

  selectCourse(course: any) {
    // save course in local storage
    localStorage.setItem('selectedCourse', JSON.stringify(course));
  }
}
