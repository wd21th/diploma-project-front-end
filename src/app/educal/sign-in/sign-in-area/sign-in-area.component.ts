import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign-in-area',
  templateUrl: './sign-in-area.component.html',
  styleUrls: ['./sign-in-area.component.scss']
})
export class SignInAreaComponent implements OnInit {

  constructor(public auth: AuthService) { }

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
        // go to main page
        
      }
    })
  }

}
