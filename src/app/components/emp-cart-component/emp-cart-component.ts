import { Component,Input } from '@angular/core';
import { Employee} from '../../employee';
@Component({
  selector: 'app-emp-cart-component',
  standalone: false,
  templateUrl: './emp-cart-component.html',
  styleUrl: './emp-cart-component.css'
})
export class EmpCartComponent {
  @Input()
  emp : Employee ={empId:1,empName:'name',gender:'M/F',address:'address'};

}
