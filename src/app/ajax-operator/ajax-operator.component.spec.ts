import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxOperatorComponent } from './ajax-operator.component';

describe('AjaxOperatorComponent', () => {
  let component: AjaxOperatorComponent;
  let fixture: ComponentFixture<AjaxOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
