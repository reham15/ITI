import { Component, OnInit } from '@angular/core';
import {Student} from "../../Models/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   student:Student|null=null;
   idToEdit:number|null=null;
  students:Student[]=[];


  constructor() {

  }

  ngOnInit(): void {
  }


  add(id:string,name:string,age:string,dept:string):void {

   let student:Student =new Student(Number(id),name,Number(age),Number(dept));
    this.students.push(student);


  }
  show(id:string)
  {
   this.students.forEach((student)=>{

      if(student.id===Number(id))
      {
       this.student=student;
      }


    });

  }

  delete(id:string)
  {
    this.students.forEach((student,index)=>{

      if(student.id===Number(id))
      {
        this.students.splice(index,1);
      }


    });

  }
  edit(id:string)
  {
   this.idToEdit=Number(id);

  }
  update(id:string,name:string,age:string,dept:string)

  {this.students.forEach((student)=>{

  if(student.id===this.idToEdit)
{  let studentUpdated:Student =new Student(Number(id),name,Number(age),Number(dept));

  student.name=studentUpdated.name;
  student.age=studentUpdated.age;
  student.departmentNo=studentUpdated.departmentNo
   this.idToEdit=null;

}


});}



}
