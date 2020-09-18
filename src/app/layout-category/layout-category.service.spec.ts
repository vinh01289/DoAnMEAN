import { TestBed } from '@angular/core/testing';

import { LayoutCategoryService } from './layout-category.service';

describe('LayoutCategoryService', () => {
  let service: LayoutCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
