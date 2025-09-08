import { Component } from '@angular/core';
import { Employee } from '../../employee';
@Component({
  selector: 'app-employees',
  standalone: false,
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees {
  employees : Employee[]=[
    {
    empId: 101,
    empName: "Shivya Rayareddy",
    gender : "Female",
    address : "Hubli"},
    {
    empId: 102,
    empName: "Kiran Kusuma",
    gender : "Female",
    address : "Gulbarga"},
    {
    empId: 103,
    empName: "Rajesh Patgar",
    gender : "Male",
    address : "Sirsi"},
    {
    empId: 104,
    empName: "Vijay mamadapur",
    gender : "Male",
    address : "Bijapur"},
    {
    empId: 105,
    empName: "Rahul K S",
    gender : "Male",
    address : "Chikmagalur"}
  ]
}
