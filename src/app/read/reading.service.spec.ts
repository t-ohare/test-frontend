import { ReadingService } from './reading.service';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReadComponent } from './read.component';
import { WebService } from '../http/web-service';
import { HttpClientModule } from '@angular/common/http';
import { Reading } from './reading';

describe('ReadingService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            RouterTestingModule,
            HttpClientModule,
          ],
          declarations: [
          ],
          providers: [
              ReadingService,
              WebService
            ],
        }).compileComponents();
      }));

    it("Is hooked into the test environment", () => {
        expect (1).toEqual(1);
    });

    it('can be created', () => {
        const mockWebService = TestBed.get(WebService);

        expect(new ReadingService(mockWebService)).toBeTruthy();
    });

    it('manages an array of readings', () => {
        const mockWebService = TestBed.get(WebService);

        const service = new ReadingService(mockWebService);
        service.addBlankReading();

        const reading = new Reading("CA","CA",2);
        service.addReading(reading);

        const readings = service.getReadings();
        const typeOfFirstItem = readings[0].constructor.name;
        
        expect(typeOfFirstItem).toBe("Reading");
    });

    it('calculates the total number of matches', () => {
        const mockWebService = TestBed.get(WebService);

        const service = new ReadingService(mockWebService);
        service.addBlankReading();

        const reading = new Reading("CA","CA",2);
        service.addReading(reading);

        const matchesFound = service.totalFound();

        expect(matchesFound).toBe(1);
    });

    it('calculates the total number of reads', () => {
        const mockWebService = TestBed.get(WebService);

        const service = new ReadingService(mockWebService);
        service.addBlankReading();

        const reading = new Reading("CA","CA",2);
        service.addReading(reading);

        const numberOfReadings = service.totalRead();

        expect(numberOfReadings).toBe(2);
    });

});