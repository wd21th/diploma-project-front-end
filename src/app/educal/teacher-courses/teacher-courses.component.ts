import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.scss']
})
export class TeacherCoursesComponent implements OnInit {

  form: FormGroup = this.fb.group({
    category: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    iframe: ['', Validators.required],
    image_url: ['', Validators.required],
    price: ['', Validators.required],
    video_lessons: this.fb.array([
      this.fb.group({
        name: '',
        iframe: '',
      })
    ])
  })

  get video_lessons() {
    return this.form.get('video_lessons') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    public coursesService: CoursesService,
    public translate: TranslateService,
  ) { }

  ngOnInit() {
    this.translate.use(localStorage.getItem('language') || 'kz');
    this.coursesService.getCategories();
    this.coursesService.getTeacherCourses();
    
  }

  addCourse() {
    this.coursesService.addCourse(this.form.value).subscribe((data: any) => {
      console.log(data);
    })
  }

  addVideoLesson() {
    this.video_lessons.push(this.fb.group({
      name: '',
      iframe: '',
    }))
  }
}
