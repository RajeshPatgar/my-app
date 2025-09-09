import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login.component',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user={
    email:'',
    password:'',
    rememberMe:false,
  };
  constructor(private router:Router){}
  
onSubmit() {
  console.log("Log in Data: ", this.user);

  if (!this.user.email || !this.user.password) {
    alert('Please fill all fields');
    return;
  }

  // Simple demo login check
  if (this.user.email === "admin@admin.com" && this.user.password === "admin123") {
    localStorage.setItem("loggedIn", "true");
    this.router.navigate(['/employees']);
  } else {
    alert('Invalid email or password');
  }
}

}
