import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TransferService } from '../../services/transfer.service';

@Component({
  templateUrl: 'cards.component.html'
})
export class CardsComponent {
  ApprovedRequests;
  constructor(private dataservice: DataService,private transfer: TransferService) { 
      this.ApprovedRequests = this.getApprovedRequests("approved");
  }

  
  getApprovedRequests(status)
  {
    return this.dataservice.getUserRequestStatus("approved");
  }

  loadDetails(id) {
      this.transfer.setData(id);
  }
  
}
