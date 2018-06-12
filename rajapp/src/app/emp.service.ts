import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { emp } from './emp/emp';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private url:string='http://localhost:3000/emp/';
  constructor(private _http:HttpClient) { }
  getAllemp(){
    return this._http.get(this.url);
  }
  addAllTask(item:emp){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  deleteTask(item:emp){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.id,{headers:head1});
  }
}

