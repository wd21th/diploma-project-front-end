import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign-up-area',
  templateUrl: './sign-up-area.component.html',
  styleUrls: ['./sign-up-area.component.scss']
})
export class SignUpAreaComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  user = {
    full_name: '',
    email: '',
    password: '',
    courses: []
  }

  submit(){
    this.auth.add(this.user).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigateByUrl('/');
    })
  }
}
