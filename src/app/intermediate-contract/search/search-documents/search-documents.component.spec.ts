import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDocumentsComponent } from './search-documents.component';

describe('SearchDocumentsComponent', () => {
  let component: SearchDocumentsComponent;
  let fixture: ComponentFixture<SearchDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
