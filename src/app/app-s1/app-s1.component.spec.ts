import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppS1Component } from './app-s1.component';

describe('AppS1Component', () => {
  let component: AppS1Component;
  let fixture: ComponentFixture<AppS1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppS1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
