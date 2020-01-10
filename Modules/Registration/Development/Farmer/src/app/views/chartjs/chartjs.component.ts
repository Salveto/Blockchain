import { Component } from '@angular/core';
import { FarmerGroupService } from '../../services/farmer-group.service';

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartJSComponent {

  constructor(private groupService: FarmerGroupService) {

  }
  create() {
    var status = this.groupService.create(1);
    if(status) {
      alert("Created successfully");
    }
  }

}
