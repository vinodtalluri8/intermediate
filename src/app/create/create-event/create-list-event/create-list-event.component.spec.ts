import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListEventComponent } from './create-list-event.component';

describe('CreateListEventComponent', () => {
  let component: CreateListEventComponent;
  let fixture: ComponentFixture<CreateListEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateListEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
