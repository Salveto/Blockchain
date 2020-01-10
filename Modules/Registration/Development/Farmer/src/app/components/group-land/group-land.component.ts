import { Component, OnInit } from '@angular/core';
import { FarmerGroupService } from '../../services/farmer-group.service';
import { MapLoaderService } from './map.loader'
declare const google: any;

@Component({
  
  templateUrl: './group-land.component.html',
  styleUrls: ['./group-land.component.scss']
})
export class GroupLandComponent implements OnInit {
 
  title = 'Lands';
  center: any = {
    lat: 28.5362475,
    lng: -66.9267386
  };
  id;
  landArray;
  public show:boolean = false;
  public buttonName:any = 'Show';



  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show"
  }



  ngOnInit() {

  }
  
  constructor(private groupService: FarmerGroupService) {
    this.landArray = this.getDetails();
  }

  //Get group recommendations
  getDetails() {
      //return this.groupService.getRecommendations(this.id);
  }

  join(id) {
      var status =  this.groupService.joinGroup(id);
      if(status) {
        alert("Join Successful");
      }
  }
  onMapReady(map) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {
    var triangleCoords = []

    //Co-ordinates to be drawn
    triangleCoords[0] = [
      [25.774, -80.190],
      [18.466, -66.118],
      [32.321, -64.757],
      [25.774, -80.190]
    ];
    triangleCoords[1] = [
      [35.774, -80.190],
      [28.466, -66.118],
      [42.321, -64.757],
      [45.774, -80.190]
    ];
    
    //A multidimensional array to draw a polygon
    var points = new Array(2);
    for(var i=0;i<2;i++)
    {
      points[i] = [];
    }
   
    for(var j=0;j<2;j++) {
       for (var i = 0; i < triangleCoords[0].length; i++) {
            points[j].push({
                 lat: triangleCoords[j][i][0],
                 lng: triangleCoords[j][i][1]
              } )
        }
    }

    var Colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFFFF", "#000000", "#FFFF00", "#00FFFF", "#FF00FF"];

  
    for(var i=0; i<2;i++) {
      var bermudaTriangle = new google.maps.Polygon({
      paths: points[i],
      strokeColor: Colors[i],
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: Colors[i],
      fillOpacity: 0.35
      });
      bermudaTriangle.setMap(map);
    }
  }
}
