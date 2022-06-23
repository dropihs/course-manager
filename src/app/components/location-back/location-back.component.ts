import { Component, OnInit, Directive, HostListener } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-location-back',
  templateUrl: './location-back.component.html',
  styleUrls: ['./location-back.component.css']
})


export class LocationBackComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
}
