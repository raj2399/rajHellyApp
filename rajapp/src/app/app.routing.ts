import { Routes,RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { EmpComponent } from './emp/emp.component';
import { ProdComponent } from './prod/prod.component';
import { Todo1Component } from './todo1/todo1.component';
import { StudentComponent } from './student/student.component';

const arr:Routes=[
  {path:'',component:StudentComponent},
  {path:'category',component:CategoryComponent},
  {path:'product',component:ProdComponent},
  {path:'todo',component:Todo1Component},
  {path:'employee',component:EmpComponent},
];
export const routing=RouterModule.forRoot(arr);
