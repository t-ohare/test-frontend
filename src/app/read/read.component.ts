import { Component, OnInit, Input } from '@angular/core';
import { Reading } from './reading';
import { ReadingService } from './reading.service'

@Component({
  selector: 'reading',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})

/**
 * UI Component, (almost) no actual domain logic
 */
export class ReadComponent implements OnInit {
  ngOnInit(): void { 
    this.reading.refreshUI();
  }

  // Reading is the actual domain logic
  @Input() reading: Reading;

  readingsService: ReadingService;

  // region Constructors
  constructor(readingsService: ReadingService) {
    this.readingsService = readingsService;
  }
  // endregion

  // Test: Spec
  generateReading() {
    this.reading.readingVal = this.generateRandomReading();
    this.search();
    return false;
  }

  // Test: Spec
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

  // Test: Visual
  updateReading(event) {
    this.reading.readingVal = event.target.value;
    this.search();
  }

  // Test: Visual
  updateSearch(event) {
    this.reading.searchVal = event.target.value;

    this.search();
  }

  //Test: Delegated
  search() {
    this.reading.refreshUI();
  }

  //Test: Delegated
  removeReading(index) {
    this.readingsService.reads.splice(index, 1);
    this.readingsService.reindex();    
    this.readingsService.save();
    return false;
  }

  //Test: Delegated
  goNext(event):boolean {
    this.reading.goNext();

    return false;
  }

  //Test:Delegated
  goBack(event):boolean {
    this.reading.goBack();

    return false;
  }
}