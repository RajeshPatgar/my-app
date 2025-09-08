import { Component, signal } from '@angular/core';
import {Employee} from './employee';
import { Employees } from './components/employees/employees';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
  msg:string="Good morning,"
  nums: number[] = [1, 2, 3];
  emp: Employee = {
  empId: 101,
  empName: "Vijay",
  gender: "Male",
  address: "Bengaluru"
};
}