import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { CoursesService } from '../courses.service';
import { Observable, ObservableInput, forkJoin } from 'rxjs';

@Component({
  selector: 'app-teacher-course-add',
  templateUrl: './teacher-course-add.component.html',
  styleUrls: ['./teacher-course-add.component.scss']
})
export class TeacherCourseAddComponent implements OnInit {

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
        attachment: null,
        file: null,
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

  ngOnInit(): void {
    this.translate.use(localStorage.getItem('language') || 'kz');
    this.coursesService.getCategories();
    this.coursesService.getTeacherCourses();

  }


  addCourse() {
    console.log('this.form.value :', this.form.value);
    this.coursesService.addCourse(this.form.value).subscribe((videoLessonsID: any) => {
      console.log(videoLessonsID);
       const obs: Observable<any>[] = [];
       
       this.video_lessons.controls.forEach((video_lesson: any, index) => {
       console.log('video_lesson :', video_lesson);
         // const formData = new FormData();
         // formData.append('file', video_lesson.value.file);
         obs.push(this.coursesService.attachFile(videoLessonsID[index], video_lesson.value.file))
         
         // this.coursesService.attachFile(video_lesson.value.file).subscribe((data: any) => {
         //   console.log('data :', data);
         //   // video_lesson.patchValue({
         //   //   attachment: data
         //   // })
         // })
       })
   
       forkJoin(obs).subscribe((data: any) => {
         console.log('data :', data);
       });





    })


  }

  addVideoLesson() {
    this.video_lessons.push(this.fb.group({
      name: '',
      iframe: '',
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
