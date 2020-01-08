import {Component, OnDestroy} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { DataService } from '../../services/data.service';

@Component({
  templateUrl: 'carousels.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class CarouselsComponent  {

  PendingRequests;
  constructor(private dataservice: DataService) { 
      this.PendingRequests = this.getPendingRequests("pending");
  }

  
  getPendingRequests(status)
  {
    return this.dataservice.getUserRequestStatus("pending");
  }


}
