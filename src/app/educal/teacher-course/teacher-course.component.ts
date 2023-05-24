import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoursesService } from '../courses.service';
import { UsersService } from '../users.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.scss']
})
export class TeacherCourseComponent implements OnInit {

  selectedCourse: any;
  
  form: FormGroup = this.fb.group({
    category: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    iframe: ['', Validators.required],
    image_url: ['', Validators.required],
    price: ['', Validators.required],
    video_lessons: this.fb.array([])
  })


  get video_lessons() {
    return this.form.get('video_lessons') as FormArray;
  }
  
  
  constructor(
    public coursesService: CoursesService, public usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    // alert('id: ' + id)
    this.coursesService.getCourseById(id).subscribe((data: any) => {
      this.selectedCourse = data;

      this.form.patchValue({
        category: this.selectedCourse.category,
        name: this.selectedCourse.name,
        description: this.selectedCourse.description,
        iframe: this.selectedCourse.iframe,
        image_url: this.selectedCourse.image_url,
        price: this.selectedCourse.price,
      })
      this.selectedCourse.video_lessons.forEach((video_lesson: any) => {
        this.video_lessons.push(this.fb.group({
          name: video_lesson.name,
          iframe: video_lesson.iframe,
        }))
      })
    });
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
