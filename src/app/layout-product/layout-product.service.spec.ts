import { TestBed } from '@angular/core/testing';

import { LayoutProductService } from './layout-product.service';

describe('LayoutProductService', () => {
  let service: LayoutProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
