import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from './header.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  category;
  id: number;
  sub: any;
  constructor(private router: ActivatedRoute, private header : HeaderService) { }

  ngOnInit() {
      this.header.getCategory().subscribe((rs)=>{
        this.category = rs;
      });

      this.sub = this.router.params.subscribe((rs)=>{
        this.id = +rs['i.nameCategory'];
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
