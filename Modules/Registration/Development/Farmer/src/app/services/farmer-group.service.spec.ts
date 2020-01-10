import { TestBed } from '@angular/core/testing';

import { FarmerGroupService } from './farmer-group.service';

describe('FarmerGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerGroupService = TestBed.get(FarmerGroupService);
    expect(service).toBeTruthy();
  });
});
