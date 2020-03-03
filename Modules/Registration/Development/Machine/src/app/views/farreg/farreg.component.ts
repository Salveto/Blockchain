import { Component, OnInit } from '@angular/core';
import { MapLoaderService } from './map.loader';
import {Router} from "@angular/router";
declare const google: any;
//import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-farreg',
  templateUrl: './farreg.component.html',
  styleUrls: ['./farreg.component.scss']
})
export class FarregComponent implements OnInit {

   constructor(/*private Auth: AuthService,*/ private router: Router) {

   }
   ngOnInit() {

   }
   register(event) {
     event.preventDefault();
     const target = event.target;
     var u_name = target.querySelector('#name').value;
     var u_ekata = target.querySelector('#ekata').value;
     var u_acres = target.querySelector('#acres').value;
     var u_state = target.querySelector('#state').value;
     var u_district = target.querySelector('#district').value;
     var u_place = target.querySelector('#place').value;
     var user = {
       name: u_name,
       ekata: u_ekata,
       acres: u_acres,
       state: u_state,
       district: u_district,
       place: u_place, 
     }
     console.log("Done");
     //this.Auth.setUserDetails(user);
     this.router.navigate(['/dashboard'])
   }
}
