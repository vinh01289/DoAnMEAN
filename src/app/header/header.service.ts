import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }
  getCategory(){
    return this.http.get("http://localhost:3000/apiCategory/");
  }
  getCategoryID(id){
    return this.http.get("http://localhost:3000/apiCategory/"+'/'+id);
  }
}
