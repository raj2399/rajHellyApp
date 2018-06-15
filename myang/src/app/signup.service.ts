import { Injectable } from '@angular/core';
import { user } from './signup/signup';
import { HttpClient,HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url:string='http://localhost:3000/user_tbl/';

  constructor(private _http:HttpClient) { }
  addUser(item:user){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:_abc});
}
  getUser(E_id:string){

    return this._http.get(this.url+E_id);
  }
  updateUser(item:user,E_id:string){
    let _abc=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.put(this.url+E_id,body,{headers:_abc});
  }
}
