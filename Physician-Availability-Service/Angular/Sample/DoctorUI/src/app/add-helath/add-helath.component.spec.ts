import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHelathComponent } from './add-helath.component';

describe('AddHelathComponent', () => {
  let component: AddHelathComponent;
  let fixture: ComponentFixture<AddHelathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHelathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHelathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
