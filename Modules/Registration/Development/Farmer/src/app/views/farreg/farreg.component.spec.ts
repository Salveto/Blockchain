import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarregComponent } from './farreg.component';

describe('FarregComponent', () => {
  let component: FarregComponent;
  let fixture: ComponentFixture<FarregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
