import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCategorySidebarComponent } from './layout-category-sidebar.component';

describe('LayoutCategorySidebarComponent', () => {
  let component: LayoutCategorySidebarComponent;
  let fixture: ComponentFixture<LayoutCategorySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCategorySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCategorySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
