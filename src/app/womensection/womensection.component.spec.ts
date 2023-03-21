import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensectionComponent } from './womensection.component';

describe('WomensectionComponent', () => {
  let component: WomensectionComponent;
  let fixture: ComponentFixture<WomensectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomensectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
