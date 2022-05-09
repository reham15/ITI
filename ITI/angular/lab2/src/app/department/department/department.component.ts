import { Component, OnInit } from '@angular/core';

import {Department} from "../../Models/department";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  department:Department|null=null;
  idToEdit:number|null=null;
  departments:Department[]=[];
  constructor() { }

  ngOnInit(): void {
  }


  add(id:string,deptname:string,location:string) {

    let department:Department =new Department(Number(id),deptname,location);
    this.departments.push(department);


  }
  show(id:string)
  {
    this.departments.forEach((department)=>{

      if(department.id===Number(id))
      {
        this.department=department;
      }


    });

  }

  delete(id:string)
  {
    this.departments.forEach((department,index)=>{

      if(department.id===Number(id))
      {
        this.departments.splice(index,1);
      }


    });

  }
  edit(id:string)
  {
    this.idToEdit=Number(id);

  }
  update(id:string,deptname:string,location:string)

  {this.departments.forEach((department)=>{

    if(department.id===this.idToEdit)
    {  let departmentUpdated:Department =new Department(Number(id),deptname,location);

      department.deptName=departmentUpdated.deptName
      department.location=departmentUpdated.location;

      this.idToEdit=null;

    }


  });}


}
