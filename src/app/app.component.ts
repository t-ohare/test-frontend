import { Component, OnInit } from '@angular/core';
import { ReadComponent } from './read/read.component';
import { Reading } from './read/reading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    var dummyReading = new Reading("Jemime");
    this.reads.push(dummyReading);
  }
  reads = [];

  addReadBlock(value){
    var dummyReading = new Reading("Emma");
    this.reads.push(dummyReading)
  }

//  

  

  title = 'frontend';
}
