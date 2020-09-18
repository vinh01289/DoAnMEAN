import { Injectable } from '@angular/core';

//goi api
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LayoutCategoryService {

  constructor(private http: HttpClient) { }

  getCategory(){
    return this.http.get("http://localhost:3000/apiCategory");
  }
  getProduct(id){
    return this.http.get("http://localhost:3000/apiProduct"+'/'+id);
  }
}
