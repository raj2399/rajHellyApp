import { Component, OnInit } from '@angular/core';
import { product } from './product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
i:number;
id:number;
na:string;
price:number;
img:string;
mfg:string;
soh:number;
a:string='../assets/1.jpg';
deep:boolean=false;
noarr:number[]=[]
  constructor(private _xyz:ProductService) { }
  arr:product[]=[];
  ngOnInit() {
    for(let i=1;i<=50;i++)
    {
      this.noarr.push(i);
    }
    this._xyz.getAllTask().subscribe(
      (data:product[])=>{this.arr=data;
      }
    );
  }
onDel(item:product)
{
  this._xyz.deleteTask(item).subscribe(
    (data:any)=>{
      this.arr.splice(this.arr.indexOf(item),1);
    }
  );

}
onAddclick()
{
  if(this.deep)
  {
    this.deep=false;
  }
  else
  {
    this.deep=true;
  }
}
onAdd(){
  this._xyz.addAllTask(new product(this.id,this.na,this.price,this.a,this.mfg,this.soh)).subscribe(
    (data:product[])=>{
      this.arr.push(new product(this.id,this.na,this.price,this.a,this.mfg,this.soh));
    }
  )
}
}

