import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUserRequestStatus(status) {
    return this.http.post('http://localhost/',{
      status
    }).subscribe(data => {
      //Get  Approval requests from the server
    })
  }

  updateUserRequestStatus(newstatus) {
    return this.http.post('http://localhost/', newstatus).subscribe(data => {
      //Update and return a value - [ true if successful] [false if unsuccessful]
    });
  }

  getDetailsById(id) {
    return this.http.post('http://localhost/', id).subscribe(data => {
      //fetch details from the server
    });
  }

  setDetailsById(id) {
    return this.http.post('http://localhost/', id).subscribe(data => {
      //Update and return a value - [ true if successful] [false if unsuccessful]
    });
  }

  approve(id) {
    return this.http.post('http://localhost/', id).subscribe(data => {
      //Update and return a value - [ true if successful] [false if unsuccessful]
    });
  }

  reject(id) {
    return this.http.post('http://localhost/', id).subscribe(data => {
      //Update and return a value - [ true if successful] [false if unsuccessful]
    });
  }
}
