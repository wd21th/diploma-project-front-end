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
    
    // https://firebasestorage.googleapis.com/v0/b/bilim-all.appspot.com/o/files%2FCSA%20lab3.pdf?alt=media&token=5c62bbd4-c601-44ba-a195-848987d81a39
    var url = 'https://firebasestorage.googleapis.com/v0/b/bilim-all.appspot.com/o/files%2FCSA%20lab3.pdf?alt=media&token=5c62bbd4-c601-44ba-a195-848987d81a39';
    async function downloadURI() {
      // await fetch(url, {
      //   method: 'GET',
      //   mode: 'no-cors',
      // }).then((r) => console.log('r :', r));

      // const downloadURL = await getDownloadURL(storageRef);
      const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
      });
      const blob = await response.blob();
      console.log('blob :', blob);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "filename.ext";
      link.click();
      
      
      return;
       await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
      }).then((r) => r.blob()).then((blobFile) => {


        console.log('blobFile :', blobFile);

        const link = document.createElement('a');
        
        
          var f = new FileReader();
          // f.readAsDataURL(blob);
        f.readAsDataURL(blobFile);
          f.onload = (d) => {
            if (!d.target || !d.target.result) return;
            link.setAttribute('href', d.target.result as string);
            console.log('d.target.result :', d.target.result);
            link.setAttribute('download', 'file.pdf');

            link.textContent = 'Download';

            document.body.appendChild(link);
            
            // link.click();
            // // after 100ms
            // setTimeout(() => {
            //   link.href = url;
            // }, 100);
          };

      });
    }
    // downloadURI();

    
  }

  addCourse() {
    this.coursesService.addCourse(this.form.value).subscribe((data: any) => {
      console.log(data);
    })
  }

  deleteCourse(id: string) {
    this.coursesService.deleteCourse(id).subscribe((data: any) => {
      this.coursesService.getTeacherCourses();
    })
  }

  addVideoLesson() {
    this.video_lessons.push(this.fb.group({
      name: '',
      iframe: '',
    }))
  }

  
}
