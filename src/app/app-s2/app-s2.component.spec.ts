import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppS2Component } from './app-s2.component';

describe('AppS2Component', () => {
  let component: AppS2Component;
  let fixture: ComponentFixture<AppS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
