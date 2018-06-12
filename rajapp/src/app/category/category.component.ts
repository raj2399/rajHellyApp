import { Component, OnInit } from '@angular/core';
import { cate } from './cat';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
flag:boolean=false;
id:number;
name:string;
bool:string;
sta:string[]=[
  'Yes',
  'No'
];
  constructor(private _abc:CategoryService) { }

  ngOnInit() {

    this._abc.getAllCat().subscribe(
      (data:cate[])=>{
        this.arr=data;
      }
    );
  }
  arr:cate[]=[

  ];
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
    this._abc.addCat(new cate(this.id,this.name,this.bool)).subscribe(
      (data:any)=>{
        this.arr.push(new cate(this.id,this.name,this.bool));
      }
    );

  }
  dele(i)
  {
    this._abc.deleteCat(i).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(i),1);
      }
    );
  }
  search(i)
  {
    var x=parseInt(prompt("Enter Id You Want to search ?"));
    this._abc.getCatById(i).subscribe(
      (data:cate[])=>{
        this.arr=data;
      }
    );

  }
  // update(item)
  // {
  //   this._abc.updateCat(this.id,this.name,this.bool)
  // }
}
