import { Component, OnInit, Input } from '@angular/core';
import { Case } from './case';
import { CasesService } from './cases.service'

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
    this.case.refreshUI();
  }
  
  // Reading is the actual domain logic
  @Input() case: Case;

  readingsService: CasesService;
//  showingMatch:number = 1;

  // region Constructors
  constructor(readingsService: CasesService) {
    this.readingsService = readingsService;
  }
  // endregion

  // Test: Spec
  generateReading() {
    this.case.reading = this.generateRandomReading();
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
    this.case.reading = event.target.value;
    this.search();
  }

  // Test: Visual
  updateSearch(event) {
    this.case.search = event.target.value;

    this.search();
  }

  //Test: Delegated
  search() {
    this.case.indicesOfSearch();
    this.case.refreshUI();
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
    this.case.goNext();

    return false;
  }

  //Test:Delegated
  goBack(event):boolean {
    this.case.goBack();

    return false;
  }
}