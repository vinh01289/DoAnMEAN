import { Component, OnInit } from '@angular/core';

//goi service lay api de su dung
import { LayoutProductService } from './layout-product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout-product',
  templateUrl: './layout-product.component.html',
  styleUrls: ['./layout-product.component.css']
})
export class LayoutProductComponent implements OnInit {

  sp ='assets/img/de-co-tri-nho-tot.jpg'

  constructor(private router: ActivatedRoute, private layoutProduct: LayoutProductService) { }

  category;
  product;

  ngOnInit(): void {
    this.layoutProduct.getCategory().subscribe((rs)=>{
      this.category = rs;
    });

    this.layoutProduct.getProduct(this.router.snapshot.params.id).subscribe((kq)=>{
      this.product = kq;
      console.log(kq);
    });
  }

}
