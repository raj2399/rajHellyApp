import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { task } from  './todo1/task';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
private url:string='http://localhost:3000/todo/';
  constructor(private _http:HttpClient) { }
  getAlltask(){
    return this._http.get(this.url);
  }
  addTask(item:task){
    let body=JSON.stringify(item);
    let hed=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:hed});
  }
  deleteTask(item:task){
    let hed=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url,{headers:hed});
  }
}
