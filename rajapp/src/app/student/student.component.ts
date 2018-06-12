import { Component, OnInit } from '@angular/core';
import {student}from './student';
import { StuService } from '../stu.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  rollno:number;
  name:string;
  mob:string
  city:string;
  gen:string;
  fees:number;
  flag:boolean=false;
  sta:string[]=[
    'surat','rajkot','baroda','ahmedabad'
  ]
  arr:student[]=[
  ];
  constructor(private _xyz:StuService) { }

  ngOnInit() {
    this._xyz.getAllstu().subscribe(
      (data:student[])=>{
        this.arr=data;
      }
    );
  }
  onAdd()
{
  if(this.flag)
  {
    this.flag=false;
  }
  else
  {
    this.flag=true;
  }
}
onclickAdd()
{
    this._xyz.addTask(new student(this.rollno,this.name,this.mob,this.city,this.gen,this.fees)).subscribe(
      (data:any)=>{
        this.arr.push(new student(this.rollno,this.name,this.mob,this.city,this.gen,this.fees));
      }
    );
  }
  dele(i){
    this._xyz.deleteTask(i).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(i),1);
      }
    );
  }
}


