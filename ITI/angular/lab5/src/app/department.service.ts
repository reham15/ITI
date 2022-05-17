import { Injectable } from '@angular/core';
import {Department} from "./models/department";

// @Injectable({
//   providedIn: 'root'
// })
export class DepartmentService {
  departments:Department[]=[];
  constructor() {
   let department=new Department(1,"jjj","jhj");
   this.departments.push(department);

  }

 public showList()
  {
    return this.departments;
  }
  public add(depart:Department)
  {
    this.departments.push(depart);
  }

}
