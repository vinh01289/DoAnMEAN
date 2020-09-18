import { Component, OnInit } from '@angular/core';

//goi service lay api de su dung
import { LayoutCategoryService } from './layout-category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout-category',
  templateUrl: './layout-category.component.html',
  styleUrls: ['./layout-category.component.css']
})
export class LayoutCategoryComponent implements OnInit {

  sp ='assets/img/de-co-tri-nho-tot.jpg'

  category;
  product;

  constructor(private router: ActivatedRoute ,private layoutCategory: LayoutCategoryService) { }

  ngOnInit(): void {
    this.layoutCategory.getCategory().subscribe((rs)=>{
      this.category = rs;
    });

    this.layoutCategory.getProduct(this.router.snapshot.params.id).subscribe((kq)=>{
      this.product = kq;
      console.log(kq);
    });
  }
}
