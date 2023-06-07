import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CoursesService } from '../courses.service';
import { UsersService } from '../users.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.scss']
})
export class TeacherCourseComponent implements OnInit {

  id: any;
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
    this.translate.use(localStorage.getItem('language') || 'kz');
    this.coursesService.getCategories();
    this.coursesService.getTeacherCourses();

    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.coursesService.getCourseById(this.id).subscribe((data: any) => {
        this.selectedCourse = data;
  
        this.form.patchValue({
          category: this.selectedCourse.category.id,
          name: this.selectedCourse.name,
          description: this.selectedCourse.description,
          iframe: this.selectedCourse.iframe,
          image_url: this.selectedCourse.image_url,
          price: this.selectedCourse.price,
        })
        console.log('this.selectedCourse.video_lessons :', this.selectedCourse.video_lessons);
        this.selectedCourse.video_lessons.forEach((video_lesson: any) => {

          if (!video_lesson.text) {
            video_lesson.text = '';
          }

          video_lesson.attachment = null;
          video_lesson.file = null;
          this.video_lessons.push(this.fb.group(video_lesson))
        })
      });
    } else {
      this.video_lessons.push(this.fb.group({
        name: '',
        iframe: '',
        text: '',
        attachment: null,
        file: null,
      }))
    }
    
  }




  addCourse() {
    this.coursesService.addCourse(this.form.value).subscribe((videoLessonsID: any) => {
      console.log(videoLessonsID);
      const obs: Observable<any>[] = [];
      this.video_lessons.controls.forEach((video_lesson: any, index) => {
        obs.push(this.coursesService.attachFile(videoLessonsID[index], video_lesson.value.file))
      })

      forkJoin(obs).subscribe((data: any) => {
        console.log('data :', data);
        window.history.back();
      });
    })
  }

  updateCourse() {
    console.log('this.form.value :', this.form.value);

    const obs: Observable<any>[] = [];

    this.video_lessons.controls.forEach((video_lesson: any, index) => {
      if (video_lesson.value.file) {
        obs.push(this.coursesService.attachFile(video_lesson.value.id, video_lesson.value.file))
      }
    })

    if (obs.length > 0) {
      forkJoin(obs).subscribe((data: any) => {
        this.updateCourseFields();
      })
    } else {
      this.updateCourseFields();
    }
  }

  updateCourseFields() {
    this.coursesService.updateCourse(this.id, this.form.value).subscribe((data: any) => {
      console.log(data);
      window.location.reload();
    })
  }

  addVideoLesson() {
    this.video_lessons.push(this.fb.group({
      name: '',
      iframe: '',
      text: '',
      attachment: null,
      file: null,
    }))
  }

  addAttachment(event: any, i: number) {
    const file = event.target.files[0];
    console.log('file :', file);
    const formData = new FormData();
    formData.append('file', file);

    this.video_lessons.controls[i].patchValue({
      file: formData
    })
  }


}
