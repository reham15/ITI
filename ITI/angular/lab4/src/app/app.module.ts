import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DepartmentModule} from "./department/Department.module";
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DepartmentModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
