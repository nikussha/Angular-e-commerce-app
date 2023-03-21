import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensectionComponent } from './mensection.component';

describe('MensectionComponent', () => {
  let component: MensectionComponent;
  let fixture: ComponentFixture<MensectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
