import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../employee-service';

@Component({
  selector: 'app-employees',
  standalone: false,
  templateUrl: './employees.html',
  styleUrls: ['./employees.css']   // ✅ corrected
})
export class Employees implements OnInit {
  // Future: this data will be pulled from DB
  employees: Employee[] = [];
  original: Employee[] = [];   // ✅ spelling corrected
  search: string = "Amit";

  constructor(private service: EmployeeService) {}

  ngOnInit(): void {
    this.service.getAllEmployees().subscribe(
      (emps: Employee[]) => {
        console.log(emps);
        this.employees = emps;
        this.original = emps;
        // ❌ no need for changeDetector.detectChanges()
      }
    );
  }

  searchEmps(): void {
    this.employees = this.original.filter((s: Employee) =>
      s.empName.toLowerCase().includes(this.search.toLowerCase()) ||
      s.gender.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
