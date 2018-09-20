import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEventsListComponent } from './search-events-list.component';

describe('SearchEventsListComponent', () => {
  let component: SearchEventsListComponent;
  let fixture: ComponentFixture<SearchEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEventsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
