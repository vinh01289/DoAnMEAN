import { Component, OnInit } from '@angular/core';

//goi service lay api de su dung
import { LayoutHomeService } from './layout-home.service';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.css']
})
export class LayoutHomeComponent implements OnInit {

  images = ['sli1.jpg', 'sli2.jpg'].map((n) => `assets/img/${n}`);

  sp = 'assets/img/sp.jpg'

  constructor(private layouthome: LayoutHomeService) { }

  category;

  ngOnInit(): void {
    this.layouthome.getCategory().subscribe((rs)=>{
      this.category = rs;
    });
  }
}
