import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {student } from './student/student'
@Injectable({
  providedIn: 'root'
})
export class StuService {
  private url:string='http://localhost:3000/student/';
  constructor(private _http:HttpClient) { }
  getAllstu(){
    return this._http.get(this.url);
  }
  addTask(item:student){
    let body=JSON.stringify(item);
    let hed=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:hed});
  }
  deleteTask(item:student){
    let hed=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.rollno,{headers:hed});
  }
}
