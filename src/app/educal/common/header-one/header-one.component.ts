import { Component, HostListener, OnInit,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

  @Input () header__white : string | undefined

  headerSticky : boolean = false;
  showCart : boolean = false;
  showSidebar : boolean = false;
  showHomeDropdown : boolean = false;
  showCoursesDropdown : boolean = false;
  showBlogDropdown : boolean = false;
  showPagesDropdown : boolean = false;
  selectedLanguage : string = 'kz';
  // cart quantity
  count = 1;
  countTwo = 1;
  countThree = 1;

// sticky nav
  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }
// handleCartToggle
  handleCartToggle () {
    this.showCart = true;
  }
  handleCartClose () {
    this.showCart = false;
  }
  handleAddCart (number : string) {
    if(number === 'one'){
      this.count++
    }
    if(number === 'two'){
      this.countTwo++
    }
    if(number === 'three'){
      this.countThree++
    }
  }
  handleDecreaseCart (number : string){
    if(number === 'one' && this.count > 1){
      this.count--
    }
    if(number === 'two' && this.countTwo > 1){
      this.countTwo--
    }
    if(number === 'one' && this.countThree > 1){
      this.countThree--
    }
  }
  // handleSidebar
  handleSidebar () {
    this.showSidebar = true;
  }
  handleSidebarClose () {
    this.showSidebar = false;
  }


  // home dropdown
  homeDropdown () {
    this.showHomeDropdown = !this.showHomeDropdown
  }
  // coursesDropdown
  coursesDropdown () {
    this.showCoursesDropdown = !this.showCoursesDropdown
  }

  // blogDropdown
  blogDropdown () {
    this.showBlogDropdown = !this.showBlogDropdown
  }
  // pagesDropDown
  pagesDropDown () {
    this.showPagesDropdown = !this.showPagesDropdown
  }

  constructor(
    public translate: TranslateService,
    public coursesService: CoursesService,
  ) {

  }

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('language') || 'kz';
    this.translate.use(this.selectedLanguage);
    
    this.coursesService.getCategories();
  }

  onLanguageChange(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

}
