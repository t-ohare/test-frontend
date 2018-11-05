import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavComponent} from './nav/nav.component';
import { ReadComponent} from './read/read.component';
import { WebService } from './http/web-service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
      ],
      declarations: [
        AppComponent,
        NavComponent,
        ReadComponent,
      ],
      providers: [
        WebService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
