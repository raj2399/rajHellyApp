import { Component, OnInit } from '@angular/core';
import { emp } from './emp';
import { StateKey } from '@angular/platform-browser';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  x:string='../../assets/img/meet.jpg';
  y:string='../../assets/img/kavish.jpg';
  z:string='../../assets/img/shrenik.jpg';
  id1:number;
  name1:string;
  image1:string;
  city:string;
  gen:string;
  ho:string;
  flag:boolean=false;
  sta:string[]=[
    'surat','amd','rajkot'
  ]
arr:emp[]=[
];

  constructor(private _xyz:EmpService) { }

  ngOnInit() {
    this._xyz.getAllemp().subscribe(
      (data:emp[])=>{
        this.arr=data;
      }
    );
  }
  onclickAdd()
{

    this._xyz.addAllTask(new emp(this.id1,this.name1,this.x,this.city,this.gen,this.ho)).subscribe(
      (data:emp[])=>{
        this.arr.push(new emp(this.id1,this.name1,this.x,this.city,this.gen,this.ho));
        this.flag=false;
      }
    )
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
ondele(item)
{
    this._xyz.deleteTask(item).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
      }
    );

  }

}
