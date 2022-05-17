import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import {DepartmentService} from "../department.service";
import {RouterModule, Routes} from "@angular/router";
import { DepartmentShowComponent } from './department-show/department-show.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import {HomeComponent} from "../home/home.component";
import {AboutComponent} from "../about/about.component";
import {NotFoundComponent} from "../not-found/not-found.component";


const routes: Routes = [



  {path:'add',component:DepartmentAddComponent},

  {path:'edit/:id',component:DepartmentEditComponent},


  {path:'',component:DepartmentListComponent,
  children:[  {path:':id',component:DepartmentShowComponent},]},
];
@NgModule({
  declarations: [
    DepartmentAddComponent,
    DepartmentListComponent,
    DepartmentShowComponent,
    DepartmentEditComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
      RouterModule.forChild(routes)
    ],
  exports:[
    DepartmentAddComponent,
    DepartmentListComponent,
  ],
  providers: [DepartmentService],
})
export class DepartmentModule { }
