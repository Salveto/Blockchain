import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(private router: Router) { }
  registerUser(event) {
    event.preventDefault();
     const target = event.target;
     var u_name = target.querySelector('#uname').value;
     var u_email = target.querySelector('#umail').value;
     var u_phone = target.querySelector('#phoneno').value;
     var u_password = target.querySelector('#password').value;
     var user = {
       name: u_name,
       email: u_email,
       phone: u_phone,
       password: u_password, 
     }
     console.log("Done");
     //this.Auth.setUserDetails(user);
     this.router.navigate(['/dashboard'])
  }
}
