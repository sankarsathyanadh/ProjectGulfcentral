import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visaapplication } from './visaapplication';

describe('Visaapplication', () => {
  let component: Visaapplication;
  let fixture: ComponentFixture<Visaapplication>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visaapplication]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visaapplication);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
