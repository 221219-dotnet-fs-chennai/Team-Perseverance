import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentRequestsComponent } from './appointment-requests.component';

describe('AppointmentRequestsComponent', () => {
  let component: AppointmentRequestsComponent;
  let fixture: ComponentFixture<AppointmentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
