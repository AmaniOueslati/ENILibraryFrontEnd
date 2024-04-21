import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infos1Component } from './infos1.component';

describe('Infos1Component', () => {
  let component: Infos1Component;
  let fixture: ComponentFixture<Infos1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Infos1Component]
    });
    fixture = TestBed.createComponent(Infos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
