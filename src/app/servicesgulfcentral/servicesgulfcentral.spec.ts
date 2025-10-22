import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicesgulfcentral } from './servicesgulfcentral';

describe('Servicesgulfcentral', () => {
  let component: Servicesgulfcentral;
  let fixture: ComponentFixture<Servicesgulfcentral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servicesgulfcentral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicesgulfcentral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
