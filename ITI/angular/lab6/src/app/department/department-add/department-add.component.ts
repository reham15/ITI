import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/department";
import {DepartmentService} from "../../department.service";
import {Router} from "@angular/router";
import {DeptDbService} from "../../dept-db.service";

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  errors:any[]=[];
  department:Department=new Department(0,'','');
  constructor(public dept:DeptDbService,private router:Router) { }

  ngOnInit(): void {


  }
  add(id:string,name:string,loc:string )
  {
    this.department.id=Number(id);
    this.department.name=name;
    this.department.location=loc;
   this.dept.add(this.department).subscribe(data=>
     {

       this.router.navigate(["departments"]);

     },
     (error:any)=>{
       this.errors = error;

      console.log(this.errors);


     }



   );


  }


}
