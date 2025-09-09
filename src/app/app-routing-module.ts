import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Employees } from './components/employees/employees';
import { EmpCartComponent } from './components/emp-cart-component/emp-cart-component';
import { EmpFormComponent } from './emp-form-component/emp-form.component';
const routes: Routes = [
  {
  path:"employees",
  component:Employees
  },
  {
  path:"empform",
  component:EmpFormComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }