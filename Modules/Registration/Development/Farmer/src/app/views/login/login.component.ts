import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.authService.logout();
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.authService.logIn(username, password);
  }

}
