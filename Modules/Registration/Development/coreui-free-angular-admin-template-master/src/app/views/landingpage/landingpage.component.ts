import { Component, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
