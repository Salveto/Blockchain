import { Component, OnInit } from '@angular/core';
//import { MapLoaderService } from './map.loader'
declare const google: any;

@Component({
  selector: 'app-group-land',
  templateUrl: './group-land.component.html',
  styleUrls: ['./group-land.component.scss']
})
export class GroupLandComponent implements OnInit {

  title = 'Lands';
  center: any = {
    lat: 28.5362475,
    lng: -66.9267386
  };
  
  ngOnInit() {

  }
  onMapReady(map) {
    this.initDrawingManager(map);
  }

  initDrawingManager(map: any) {
    // const options = {
    //   drawingControl: true,
    //   drawingControlOptions: {
    //     drawingModes: ["polygon"]
    //   },
    //   polygonOptions: {
    //     draggable: true,
    //     editable: true
    //   },
    //   drawingMode: google.maps.drawing.OverlayType.POLYGON
    // };


    // var temp;
    // var drawingManager = new google.maps.drawing.DrawingManager(options);
    // drawingManager.setMap(map);

    var triangleCoords = []
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
    var points1 = [];
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
            })
        }
      
    // points1.push({
    //   lat: triangleCoords1[i][0],
    //   lng: triangleCoords1[i][1]
    // })]
  }

  var Colors = [
    "#FF0000", 
    "#00FF00", 
    "#0000FF", 
    "#FFFFFF", 
    "#000000", 
    "#FFFF00", 
    "#00FFFF", 
    "#FF00FF"
];

  console.log(points)
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
