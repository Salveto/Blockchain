import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  templateUrl: 'collapses.component.html'
})
export class CollapsesComponent {

  RejectedRequests;
  constructor(private dataservice: DataService) { 
      this.RejectedRequests = this.getRejectedRequests("rejected");
  }

  
  getRejectedRequests(status)
  {
    return this.dataservice.getUserRequestStatus("rejected");
  }

}
