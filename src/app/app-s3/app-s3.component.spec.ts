import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppS3Component } from './app-s3.component';

describe('AppS3Component', () => {
  let component: AppS3Component;
  let fixture: ComponentFixture<AppS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppS3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
