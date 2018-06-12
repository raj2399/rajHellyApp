import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ClcComponent } from './clc/clc.component';
import { Todo1Component } from './todo1/todo1.component';
import { StudentComponent } from './student/student.component';
import { ProdComponent } from './prod/prod.component';
import { EmpComponent } from './emp/emp.component';
import {HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header.component';
@NgModule({
  declarations: [
    AppComponent,
    ClcComponent,
    Todo1Component,
    StudentComponent,
    ProdComponent,
    EmpComponent,
    CategoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
