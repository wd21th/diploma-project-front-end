import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign-up-area',
  templateUrl: './sign-up-area.component.html',
  styleUrls: ['./sign-up-area.component.scss']
})
export class SignUpAreaComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  user = {
    full_name: '',
    email: '',
    password: '',
  }

  submit(){
    this.auth.add(this.user).subscribe((data: any) => {
      console.log(data);
    })
  }
}
