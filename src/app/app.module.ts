import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent} from './nav/nav.component';
import { ReadComponent} from './read/read.component';
import { HttpClientModule } from '@angular/common/http';
import { WebService } from './http/web-service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    WebService
  ],
  bootstrap: [AppComponent],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
