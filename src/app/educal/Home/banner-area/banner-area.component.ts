import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-area',
  templateUrl: './banner-area.component.html',
  styleUrls: ['./banner-area.component.scss']
})
export class BannerAreaComponent implements OnInit {
  href =''

  constructor() {
    
   }

  ngOnInit(): void {
    this.href = window.location.href;
  }

}
