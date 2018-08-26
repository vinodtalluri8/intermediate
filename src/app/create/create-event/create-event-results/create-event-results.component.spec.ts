import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventResultsComponent } from './create-event-results.component';

describe('CreateEventResultsComponent', () => {
  let component: CreateEventResultsComponent;
  let fixture: ComponentFixture<CreateEventResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
