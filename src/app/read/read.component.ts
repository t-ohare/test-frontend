import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { Reading } from './reading';


@Component({
  selector: 'reading',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  @Input()
  reading: Reading;
}