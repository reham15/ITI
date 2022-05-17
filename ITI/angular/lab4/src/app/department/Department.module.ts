import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import {DepartmentService} from "../department.service";



@NgModule({
  declarations: [
    DepartmentAddComponent,
    DepartmentListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DepartmentAddComponent,
    DepartmentListComponent,
  ],
  providers: [DepartmentService],
})
export class DepartmentModule { }
