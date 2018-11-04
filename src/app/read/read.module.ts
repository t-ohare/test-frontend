import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { ReadComponent } from './read.component';
import { Reading } from './reading';

@NgModule({
  declarations: [
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Reading
  ],
  providers: [],
  bootstrap: [ReadComponent]
})
export class ReadModule {
}
