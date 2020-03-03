import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRequestDetailsComponent } from './farmer-request-details.component';

describe('FarmerRequestDetailsComponent', () => {
  let component: FarmerRequestDetailsComponent;
  let fixture: ComponentFixture<FarmerRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
