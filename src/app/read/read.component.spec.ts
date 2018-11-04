import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {ReadComponent} from './read.component';
import {Reading} from './reading';

describe('ReadComponent', () => {
    it("should be hooked into the test environment", () => {
        expect (1).toEqual(1);
    });

    it('should create an instance', () => {
        expect(new ReadComponent()).toBeTruthy();
    });

    it ('can generate a random string consisting of only valid character', () => {
        const c = new ReadComponent();
        const randomStr = c.generateRandomReading();
        const randomStrLength = randomStr.length;
        const indexOfInvalidCharacter = randomStr.indexOf("U");
        const indexOfValidCharacter = randomStr.indexOf("A");

        expect(randomStrLength).toEqual(150);
        expect(indexOfInvalidCharacter).toEqual(-1);
        expect(indexOfValidCharacter).toBeTruthy();
    });

    it('can show the intstances of a reading search in the reading', () => {
        const c = new ReadComponent();
    })
});