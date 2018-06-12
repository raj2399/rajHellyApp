import { TestBed, inject } from '@angular/core/testing';

import { StuService } from './stu.service';

describe('StuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StuService]
    });
  });

  it('should be created', inject([StuService], (service: StuService) => {
    expect(service).toBeTruthy();
  }));
});
