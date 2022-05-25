import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Department} from "./models/department";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeptDbService {

  constructor(private http: HttpClient) {
  }

  public showList() {
    return this.http.get<Department[]>("http://127.0.0.1:8000/api/departments");
  }

  public add(depart: Department) {
    return this.http.post<Department>("http://127.0.0.1:8000/api/departments/", depart).pipe( catchError(this.handleError));
  }

  public showOne(id: string | null) {
    return this.http.get<Department>("http://127.0.0.1:8000/api/departments/" + id);
  }

  delete(id: string) {
    return this.http.delete("http://127.0.0.1:8000/api/departments/" + id);
  }

  update(id: string, depart: Department) {
    return this.http.put("http://127.0.0.1:8000/api/departments/" + id, depart);

  }
  handleError(error:any) {
    let errorMessage :any = [];
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error



      for(var item in error.error.errors){
        // this condition is required to prevent moving forward to prototype chain
        if( error.error.errors.hasOwnProperty(item)){
          errorMessage.push( error.error.errors[item]);
        }
      }
      //errorMessage = `Error Code: ${error.status}\nMessage: ${ Object.values(error.error.errors)}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
