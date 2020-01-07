import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
    //Post these details to server
    return this.http.post(' ',{
      username, 
      password
    }).subscribe(data => {
      console.log(data, " is the data we got from the server")
    })
  }
}
