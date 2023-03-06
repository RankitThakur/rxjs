import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IifOperatorComponent } from './iif-operator.component';

describe('IifOperatorComponent', () => {
  let component: IifOperatorComponent;
  let fixture: ComponentFixture<IifOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IifOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IifOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
