import { Component, OnInit } from '@angular/core';
import { task } from './task';
import { TodoService } from  '../todo.service';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component implements OnInit {

  constructor(private _xyz:TodoService) { }
  arr:task[]=[
  ];
  ngOnInit() {
    this._xyz.getAlltask().subscribe(
      (data:task[])=>{this.arr=data;
      }
    );
  }
  onUpdate(item:task)
  {
    if(item.Status=='pending')
    {
      item.Status='done';
    }
    else
    {
      item.Status='pending';
    }
  }
onDelete(item:task)
{
  this.arr.splice(this.arr.indexOf(item),1);
}

}
