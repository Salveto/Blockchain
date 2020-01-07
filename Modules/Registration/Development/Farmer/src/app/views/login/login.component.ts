import { Component } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  constructor(/*private Auth: AuthService,*/ private router: Router) {

  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    //this.Auth.getUserDetails(username, password);
    console.log("Done");
    this.router.navigate(['/dashboard'])
  }

}
