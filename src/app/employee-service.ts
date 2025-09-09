import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor( private httpClient:HttpClient ){

  }
  baseUrl:string="https://68be9b179c70953d96ecdfa1.mockapi.io/employees?gender=male"
  getAllEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }
}
