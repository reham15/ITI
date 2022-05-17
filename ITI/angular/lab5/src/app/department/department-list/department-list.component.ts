import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/department";
import {DepartmentService} from "../../department.service";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],

})
export class DepartmentListComponent implements OnInit {
 departments:Department[]=[];
  constructor(public depart: DepartmentService) {


  }

  ngOnInit(): void {
    this.departments=this.depart.showList();
  }



}
