import { Component, OnInit, Input } from '@angular/core';
import { Reading } from './reading';
import {ReadingsService} from './readings.service'

@Component({
  selector: 'reading',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

export class ReadComponent implements OnInit {
  ngOnInit(): void {
    this.reading.refreshUI();
  }

  @Input() public reading: Reading;

  readings: ReadingsService;

  showingMatch:number = 1;

  constructor(readings: ReadingsService) {
    this.readings = readings;
  }

  generateReading() {
    this.reading.reading = this.generateRandomReading();
    this.findInstancesOfRead();
    return false;
  }

  generateRandomReading() {
    let str = "";
    const options = "CAGT";

    for (var i = 0; i < 150; i++) {
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomCharacter = options.charAt(randomIndex);

      str += randomCharacter;
    }

    return str;
  }

  updateReading(event) {
    this.reading.reading = event.target.value;
    this.findInstancesOfRead();
  }

  updateSearch(event) {
    this.reading.search = event.target.value;

    this.findInstancesOfRead();
  }

  findInstancesOfRead() {
    this.reading.indicesOfSearch();
    this.reading.refreshUI();
  }

  removeReading(index) {
    this.readings.reads.splice(index, 1);
    this.readings.reindex();    
    return false;
  }

  goNext(event):boolean {
    this.reading.goNext();

    return false;
  }

  goBack(event):boolean {
    this.reading.goBack();

    return false;
  }
}