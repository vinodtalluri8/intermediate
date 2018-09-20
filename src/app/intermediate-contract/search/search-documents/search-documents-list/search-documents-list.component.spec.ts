import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDocumentsListComponent } from './search-documents-list.component';

describe('SearchDocumentsListComponent', () => {
  let component: SearchDocumentsListComponent;
  let fixture: ComponentFixture<SearchDocumentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDocumentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDocumentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
