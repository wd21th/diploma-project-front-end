import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseAddComponent } from './teacher-course-add.component';

describe('TeacherCourseAddComponent', () => {
  let component: TeacherCourseAddComponent;
  let fixture: ComponentFixture<TeacherCourseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherCourseAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
