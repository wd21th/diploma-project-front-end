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
  }

  submit(){
    this.auth.check(this.user).subscribe((data: any) => {
      console.log(data);
      if(Object.keys(data).length){
        // save user data in local storage
        localStorage.setItem('user', JSON.stringify(data));
        // go to main page
        this.router.navigateByUrl('/');
        
      }
    })
  }

}
