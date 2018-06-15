import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { log } from './login/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private url:string='http://localhost:3000/user_tbl/';
  constructor(private _http:HttpClient) { }
  getUserById(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+item.E_id,body,{headers:head1});
  }

}
