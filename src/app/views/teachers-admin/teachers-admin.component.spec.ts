import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersAdminComponent } from './teachers-admin.component';

describe('TeachersAdminComponent', () => {
  let component: TeachersAdminComponent;
  let fixture: ComponentFixture<TeachersAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersAdminComponent]
    });
    fixture = TestBed.createComponent(TeachersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
