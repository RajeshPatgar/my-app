import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent {
  employee = {
    empId: 0,
    empName: '',
    address: '',
    gender: ''
  };

  addEmp():void{
    console.log("this.emp")
  }


  onSubmit(form: any) {
    if (form.valid) {
      console.log("Employee Data:", this.employee);
      alert(`Employee Added: ${this.employee.empName}`);
      form.reset();
    }
  }
}
