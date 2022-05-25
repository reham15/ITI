import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/department";
import {DepartmentService} from "../../department.service";
import {Router} from "@angular/router";
import {DeptDbService} from "../../dept-db.service";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],

})
export class DepartmentListComponent implements OnInit {
 departments:Department[]=[];
  constructor(public depart: DeptDbService,private router: Router) {


  }

  ngOnInit(): void {

   // this.departments=this.depart.showList();
    this.depart.showList().subscribe((d:any)=>{

    this.departments=d.data;
      console.log(this.departments);
      }




    );
  }
  showRedirect(iD:string)
  { let id=Number(iD);
   this.router.navigate(["departments",id]);
  }
  editRedirect(iD:string)
  { let id=Number(iD);
    this.router.navigate(["departments/edit",id]);
  }

  delete(id:string)
  {
    this.depart.delete(id).subscribe(data=>
      { console.log("kkk");
        this.router.navigate(["departments"]);
        this. ngOnInit();
      }

    );

  }

}
