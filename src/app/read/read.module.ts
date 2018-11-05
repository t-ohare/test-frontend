import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { ReadComponent } from './read.component';
import { Case } from './case';

@NgModule({
  declarations: [
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Case
  ],
  providers: [],
  bootstrap: [ReadComponent]
})

export class ReadModule {
}
