import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SwiperModule } from 'swiper/angular';
import { HomeComponent } from './Home/Home/home.component';
import { HeaderOneComponent } from './common/header-one/header-one.component';
import { HeroComponent } from './Home/hero/hero.component';
import { CategoryComponent } from './Home/category/category.component';
import { BannerAreaComponent } from './Home/banner-area/banner-area.component';
import { CoursesComponent } from './Home/courses/courses.component';
import { EventsComponent } from './Home/events/events.component';
import { PricingComponent } from './Home/pricing/pricing.component';
import { CtaComponent } from './Home/cta/cta.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutAreaComponent } from './common/about-area/about-area.component';
import { CoursesPageComponent } from './courses/courses-page/courses-page.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { CourseGridComponent } from './common/course-grid/course-grid.component';
import { CoursesPageCoursesAreaComponent } from './courses/courses-page-courses-area/courses-page-courses-area.component';
import { PaginationComponent } from './common/pagination/pagination.component';
import { CoursesListPageComponent } from './courses-list-page/courses-list-main/courses-list-page.component';
import { CoursesListAreaComponent } from './courses-list-page/courses-list-area/courses-list-area.component';
import { CourseSidebarMainComponent } from './course-sidebar/course-sidebar-main/course-sidebar-main.component';
import { CourseSidebarAreaComponent } from './course-sidebar/course-sidebar-area/course-sidebar-area.component';
import { RelatedCourseComponent } from './common/related-course/related-course.component';
import { CourseDetailsComponent } from './course-details/course-details-main/course-details.component';
import { CourseDetailsAreaComponent } from './course-details/course-details-area/course-details-area.component';
import { BlogComponent } from './blog/blog-main/blog.component';
import { BlogSidebarComponent } from './common/blog-sidebar/blog-sidebar.component';
import { BlogAreaComponent } from './blog/blog-area/blog-area.component';
import { BlogDetailsMainComponent } from './blog-details/blog-details-main/blog-details-main.component';
import { BlogDetailsTitleComponent } from './blog-details/blog-details-title/blog-details-title.component';
import { BlogDetailsAreaComponent } from './blog-details/blog-details-area/blog-details-area.component';
import { AboutMainComponent } from './about/about-main/about-main.component';
import { InstructorMainComponent } from './instructor/instructor-main/instructor-main.component';
import { InstructorAreaComponent } from './instructor/instructor-area/instructor-area.component';
import { EventDetailsTitleComponent } from './event-details/event-details-title/event-details-title.component';
import { WishlistMainComponent } from './wishlist/wishlist-main/wishlist-main.component';
import { WishlistAreaComponent } from './wishlist/wishlist-area/wishlist-area.component';
import { CheckoutMainComponent } from './checkout/checkout-main/checkout-main.component';
import { CheckoutAreaComponent } from './checkout/checkout-area/checkout-area.component';
import { CouponAreaComponent } from './checkout/coupon-area/coupon-area.component';
import { SignInMainComponent } from './sign-in/sign-in-main/sign-in-main.component';
import { SignInAreaComponent } from './sign-in/sign-in-area/sign-in-area.component';
import { SignUpMainComponent } from './sign-up/sign-up-main/sign-up-main.component';
import { SignUpAreaComponent } from './sign-up/sign-up-area/sign-up-area.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { ContactAreaComponent } from './contact/contact-area/contact-area.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoursesService } from './courses.service';
import { UsersService } from './users.service';
import { SafeHtmlPipe } from './safeHtml.pipe';
import { AuthInterceptor } from './auth.interceptor';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderOneComponent,
    HeroComponent,
    CategoryComponent,
    BannerAreaComponent,
    CoursesComponent,
    EventsComponent,
    PricingComponent,
    CtaComponent,
    FooterComponent,
    AboutAreaComponent,
    CoursesPageComponent,
    BreadcrumbComponent,
    CourseGridComponent,
    CoursesPageCoursesAreaComponent,
    PaginationComponent,
    CoursesListPageComponent,
    CoursesListAreaComponent,
    CourseSidebarMainComponent,
    CourseSidebarAreaComponent,
    RelatedCourseComponent,
    CourseDetailsComponent,
    CourseDetailsAreaComponent,
    BlogComponent,
    BlogSidebarComponent,
    BlogAreaComponent,
    BlogDetailsMainComponent,
    BlogDetailsTitleComponent,
    BlogDetailsAreaComponent,
    AboutMainComponent,
    InstructorMainComponent,
    InstructorAreaComponent,
    EventDetailsTitleComponent,
    WishlistMainComponent,
    WishlistAreaComponent,
    CheckoutMainComponent,
    CheckoutAreaComponent,
    CouponAreaComponent,
    SignInMainComponent,
    SignInAreaComponent,
    SignUpMainComponent,
    SignUpAreaComponent,
    ErrorPageComponent,
    ContactMainComponent,
    ContactAreaComponent,
    ContactInfoComponent,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    SwiperModule,
    FormsModule,
    HttpClientModule,
    TranslateModule,
  ],
  providers: [
    AuthService,
    CoursesService,
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EducalModule {}
