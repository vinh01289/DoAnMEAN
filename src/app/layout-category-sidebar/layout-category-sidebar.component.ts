import { Component, OnInit } from '@angular/core';

import { LayoutCategorySidebarService } from './layout-category-sidebar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout-category-sidebar',
  templateUrl: './layout-category-sidebar.component.html',
  styleUrls: ['./layout-category-sidebar.component.css']
})
export class LayoutCategorySidebarComponent implements OnInit {
  category;

  constructor(private router: ActivatedRoute, private sidebar: LayoutCategorySidebarService) { }

  ngOnInit(): void {
    this.sidebar.getCategory().subscribe((kq)=>{
      this.category = kq;
      console.log(kq);
    });
  }

}
