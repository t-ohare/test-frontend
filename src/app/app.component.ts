import { Component, OnInit } from '@angular/core';
import { CasesService } from './read/cases.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  readings: CasesService;
  allReadings = [];
 
  constructor(readings: CasesService) {
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

  save() {
    this.readings.save();
    return false;
  }
}
