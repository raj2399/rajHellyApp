import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cate  } from './category/cat';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private url:string="http://localhost:3000/category/";
  constructor(private _http:HttpClient) { }
  getAllCat()
  {
    return this._http.get(this.url);
  };
  addCat(item:cate)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  };
  deleteCat(item:cate){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.C_Id,{headers:head1});
  };
  updateCat(item:cate)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.C_Id,body,{headers:head1});

  };
  getCatById(item:cate)
  {
    return this._http.get(this.url+item.C_Id);
  }
  }
