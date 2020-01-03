import { Component } from '@angular/core';


@Component({
  templateUrl: 'collapses.component.html'
})
export class CollapsesComponent {
  title = 'Choose land';
  lat = 51.678418;
  lng = 7.809007;


  constructor() {
  }
   
   

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
