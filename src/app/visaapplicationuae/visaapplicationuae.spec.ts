import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visaapplicationuae } from './visaapplicationuae';

describe('Visaapplicationuae', () => {
  let component: Visaapplicationuae;
  let fixture: ComponentFixture<Visaapplicationuae>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Visaapplicationuae]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Visaapplicationuae);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
