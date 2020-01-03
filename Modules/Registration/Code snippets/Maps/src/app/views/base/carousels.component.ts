import {Component, OnInit} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { MapLoaderService } from './map.loader'
declare const google: any;
@Component({
  templateUrl: 'carousels.component.html',
  
})
export class CarouselsComponent  {
  center: any = {
    lat: 33.5362475,
    lng: -111.9267386
  };

  onMapReady(map) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ["polygon"]
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON
    };


    var temp;
    var drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(map);



    google.maps.event.addListener(drawingManager, 'overlaycomplete', (event) => {
      // Polygon drawn
      if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        //Co-ordinates
        temp = event;
        console.log(event.overlay.getPath().getArray());

        
      }
    });


     google.maps.event.addListener(map, 'rightclick', (event) => {
              console.log(temp.overlay.getPath().clear());
     });
     
     


  }



  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
  ngOnDestroy() {
    
  }

}
