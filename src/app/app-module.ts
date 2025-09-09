import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Employees } from './components/employees/employees';
import { EmpCartComponent } from './components/emp-cart-component/emp-cart-component';
import { HttpClientModule } from '@angular/common/http';
import { EmpFormComponent } from './emp-form-component/emp-form.component';
import { MenuComponent } from './menu-component/menu-component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component/login.component';
@NgModule({
  declarations: [
    App,
    Employees,
    EmpCartComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
