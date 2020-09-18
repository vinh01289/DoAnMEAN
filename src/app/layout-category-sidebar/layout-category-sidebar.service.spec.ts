import { TestBed } from '@angular/core/testing';

import { LayoutCategorySidebarService } from './layout-category-sidebar.service';

describe('LayoutCategorySidebarService', () => {
  let service: LayoutCategorySidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutCategorySidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
