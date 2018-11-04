import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {ReadComponent} from './read.component';

describe('ReadComponent', () => {
    it("should be hooked into the test environment", () => {
        expect (1).toEqual(1);
    });

    it('should create an instance', () => {
        expect(new ReadComponent()).toBeTruthy();
      });
});