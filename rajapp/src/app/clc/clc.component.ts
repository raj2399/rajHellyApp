import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clc',
  templateUrl: './clc.component.html',
  styleUrls: ['./clc.component.css']
})
export class ClcComponent implements OnInit {
  no1:number=0;
  no2:number=0;
  f:number=0;
  y="";
  ans:number=0;
  constructor() { }

  ngOnInit() {
  }

}
