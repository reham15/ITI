import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/department";
import {ActivatedRoute, Router} from "@angular/router";
import {DepartmentService} from "../../department.service";
import {DeptDbService} from "../../dept-db.service";

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  id:string|null="";
  department:Department=new Department(0,'','');
  constructor( private route: ActivatedRoute,public depart:DeptDbService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');


    });
  }
update(name:string,loc:string)
{
  this.department.id=Number(this.id);
  this.department.name=name;
  this.department.location=loc;
  this.depart.update(String(this.id),this.department).subscribe(data=>
    {
      this.router.navigate(["departments"]);
    }
  );


}


}
