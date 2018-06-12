import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product } from './prod/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url:string='http://localhost:3000/product/';
  constructor(private _http:HttpClient) { }
  getAllTask(){
    return this._http.get(this.url);
  }
  addAllTask(item:product){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  deleteTask(item:product){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.id,{headers:head1});
  }
}
