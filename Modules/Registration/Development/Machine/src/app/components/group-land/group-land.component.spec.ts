import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLandComponent } from './group-land.component';

describe('GroupLandComponent', () => {
  let component: GroupLandComponent;
  let fixture: ComponentFixture<GroupLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
