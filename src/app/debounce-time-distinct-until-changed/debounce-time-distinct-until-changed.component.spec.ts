import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTimeDistinctUntilChangedComponent } from './debounce-time-distinct-until-changed.component';

describe('DebounceTimeDistinctUntilChangedComponent', () => {
  let component: DebounceTimeDistinctUntilChangedComponent;
  let fixture: ComponentFixture<DebounceTimeDistinctUntilChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceTimeDistinctUntilChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceTimeDistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
