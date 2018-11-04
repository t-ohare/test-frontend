import { Component, OnInit } from '@angular/core';
import {ReadingsService} from './read/readings.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  readings: ReadingsService;
  allReadings = [];
 
  constructor(readings: ReadingsService) {
    this.readings = readings;
  }

  ngOnInit(): void {
    this.allReadings = this.readings.getReadings();
  }

  addReadBlock(value){
    this.readings.addBlankReading();
  }

  totalRead() {
    return this.readings.totalRead();
  }

  totalFound() {
    return this.readings.totalFound();
  }
}
