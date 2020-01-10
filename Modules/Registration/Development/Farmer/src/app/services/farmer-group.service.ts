import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmerGroupService {
  constructor(private http: HttpClient) { }

  getRecommendations(id) {
    return this.http.post('http://localhost',id).subscribe(data => {
      //Get a list of groups
    })
  }

  getGroupDetails(id) {
    return this.http.post('http://localhost',id).subscribe(data => {
      //Get a list of groups
    })
  }
}
