import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../courses.service';
import { UsersService } from '../../users.service';

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
    public usersService: UsersService
  ) {}

  ngOnInit(): void {
    console.log('It works');
    // get user from local storage
    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    this.getAllCourses();
  }

  getAllCourses() {
    this.coursesService.getCourses().subscribe((data: any) => {
      console.log(data);
      this.courses = data;
    });
  }

  buacyCourse(courseId: any) {
    // get user from local storage
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    user.courses.push(courseId);
    console.log('user :', user);

    this.usersService.updateUser(user).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data));
      this.user = data;
      this.getAllCourses();
    });
  }
}
