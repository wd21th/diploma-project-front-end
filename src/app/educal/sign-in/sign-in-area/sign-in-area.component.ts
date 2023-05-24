import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign-in-area',
  templateUrl: './sign-in-area.component.html',
  styleUrls: ['./sign-in-area.component.scss']
})
export class SignInAreaComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  user = {
    email: '',
    password: '',
    isTeacher: false
  }

  submit(){
    console.log('this.user :', this.user);
    this.auth.check(this.user).subscribe((res: any) => {
      localStorage.setItem('uid', res.uid);
      // boolean as string
      localStorage.setItem('isTeacher', this.user.isTeacher.toString());
      this.router.navigateByUrl('/');
    })
  }

}
