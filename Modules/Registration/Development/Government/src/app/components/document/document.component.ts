import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/transfer.service';
import { DataService } from '../../services/data.service';

@Component({
 
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  details;
  id;
  status;
  constructor(private dataService: DataService, private transfer: TransferService) {
    this.id = this.getId();
    this.details = this.loadDetails();
   }

  getId() {
    return this.transfer.getData();
  }

  loadDetails() {
    return this.dataService.getDetailsById(this.id);
  }

  ngOnInit() {
  }

  

  approve() {
      this.status = this.dataService.approve(this.id);
  }

  reject() {
      this.status = this.dataService.reject(this.id);
  }
}
