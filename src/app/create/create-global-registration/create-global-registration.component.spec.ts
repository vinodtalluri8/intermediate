import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGlobalRegistrationComponent } from './create-global-registration.component';

describe('CreateGlobalRegistrationComponent', () => {
  let component: CreateGlobalRegistrationComponent;
  let fixture: ComponentFixture<CreateGlobalRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGlobalRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGlobalRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
