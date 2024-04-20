import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsInfo1AdminComponent } from './exams-info1-admin.component';

describe('ExamsInfo1AdminComponent', () => {
  let component: ExamsInfo1AdminComponent;
  let fixture: ComponentFixture<ExamsInfo1AdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamsInfo1AdminComponent]
    });
    fixture = TestBed.createComponent(ExamsInfo1AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
