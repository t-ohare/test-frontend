import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReadComponent } from './read.component';
import { ReadingService } from './reading.service'
import { WebService } from '../http/web-service';
import { HttpClientModule } from '@angular/common/http';


describe('ReadComponent', () => {
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
        const mockReadingsService = TestBed.get(ReadingService);
        expect(new ReadComponent(mockReadingsService)).toBeTruthy();
    });

    it ('can generate a 150 character reading consisting only of the characters C,A,G & T', () => {
        const mockReadingsService = TestBed.get(ReadingService);
        const c = new ReadComponent(mockReadingsService);
        const randomStr = c.generateRandomReading();
        const randomStrLength = randomStr.length;
        const stringContainsNoInvalidCharacters:boolean = randomStr.indexOf("U") == -1;
        const stringContainsValidCharacter:boolean =  randomStr.indexOf("A") >= 0;

        expect(randomStrLength).toEqual(150);
        expect(stringContainsNoInvalidCharacters).toBeTruthy();
        expect(stringContainsValidCharacter).toBeTruthy();
    });
});