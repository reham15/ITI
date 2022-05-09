import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{StudentModule} from "./student/student.module";
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {DepartmentModule} from "./department/department.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    StudentModule,
    DepartmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
