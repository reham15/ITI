import { Injectable } from '@angular/core';
import {Department} from "./models/department";

// @Injectable({
//   providedIn: 'root'
// })
export class DepartmentService {
  departments:Department[]=[];
  department:Department=new Department(0,'','');
  constructor() {
   let department=new Department(1,"jjj","jhj");
   this.departments.push(department);

  }

 public showList():Department[]
  {
    return this.departments;
  }
  public add(depart:Department)
  {
    this.departments.push(depart);
  }
  public showOne(id:string|null)
  {
    this.departments.forEach((department)=>{

      if(department.id===Number(id))
      {
       this.department=department;
      }




    });
    return this.department;
  }

  update(id:number,depart:Department)

  {this.departments.forEach((department)=>{

    if(department.id===Number(id))
    {

      department.name=depart.name
      department.location=depart.location;



    }


  });}

  delete(id:string)
  {
    this.departments.forEach((department,index)=>{

      if(department.id===Number(id))
      {
        this.departments.splice(index,1);
      }


    });

  }

}
