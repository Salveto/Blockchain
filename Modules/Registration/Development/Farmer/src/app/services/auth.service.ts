import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private router: Router) { }


  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
  }
  
  
  logIn(username, password) {
    //Post these details to server
    return this.http.post('http://localhost:3000/farmer/login',{
      email: username, 
      password: password
    }).subscribe(data => {
      if(data['response'] == "successful") {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem("token",data['email']);
        this.router.navigate(['/dashboard'])
      }else{
        alert('Enter a valid username/password')
      }
    })
  }

  signUp(user) {
    this.http.post('http://localhost:3000/farmer/signup', {
      id: "1",
      name: user.name,
      email: user.email,
      password: user.password,
      phone_no: user.phone
    }).subscribe(data => {
      if(data['response'] == "successful") {
        alert("Account Created Successfully!")
        this.router.navigate(['/login'])
      }else {
        alert("Account creation failed")
      }


    })
    
    
  }
  
}
