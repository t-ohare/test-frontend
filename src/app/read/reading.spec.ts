import { Reading } from './reading';

describe('Reading', () => {
    it("Is hooked into the test environment", () => {
        expect (1).toEqual(1);
    });

    it('can be created', () => {
        expect(new Reading("CAGT", "CA", 1)).toBeTruthy();
    });

    // This is an awkward test due to testing multiple functions at once
    // but they are a logical grouping
    it('searching returns an array containing the positions of a searched for string in a read string', () => {
        const testReading = new Reading("CAGTCA", "CA", 1);
        const indices = testReading.search();
        const numberOfIndices = testReading.matches();
        const firstIndex = indices[0];
        const secondIndex = indices[1];
        const thirdIndex = indices[2];

        expect(numberOfIndices).toEqual(2);
        expect(firstIndex).toEqual(1);
        expect(secondIndex).toEqual(5);
        expect(thirdIndex).toBeUndefined();
    });

    it('clicking next brings you to the next location if it exists', () => {
        const testReading = new Reading("CAGTCA", "CA", 1);
        const indices = testReading.search();
        testReading.goNext();
        const currentMatchShown = testReading.matchShown;

        expect(currentMatchShown).toEqual(2);
    });

    it('clicking back bring you to the previous location if it exists', () => {
        const testReading = new Reading("CAGTCAGTCA", "CA", 1);
        const indices = testReading.search();
        testReading.goNext(); // 2
        testReading.goNext(); // 3
        testReading.goBack(); // Back to 2
        const currentMatchShown = testReading.matchShown;

        expect(currentMatchShown).toEqual(2);
    });

    it('reports if it has or more matches to the UI', () => {
        const testReadingWithResults = new Reading("CAGTCAGTCA", "CA", 1);
        testReadingWithResults.search();

        const testReadingWithNoResults = new Reading("CATCATCA", "CGA", 2);
        testReadingWithNoResults.search();

        expect(testReadingWithResults.hasResults()).toBeTruthy();
        expect(testReadingWithNoResults.hasResults()).toBeFalsy();
    });

    it('reports if there is a match after the current one to the UI', () => {
        const testReadingWithNoResults = new Reading("CG", "CA", 1);
        testReadingWithNoResults.search();

        const testReadingWithOneResult = new Reading("CAG", "CA", 1);
        testReadingWithOneResult.search();

        const testReadingWithAnotherResult = new Reading("CACAG", "CA", 1);
        testReadingWithAnotherResult.search();
        testReadingWithAnotherResult.goNext();

        const testReadingWithMoreThanTwoResults = new Reading("CACACAGT", "CA", 2);
        testReadingWithMoreThanTwoResults.search();
        testReadingWithMoreThanTwoResults.goNext();

        expect(testReadingWithNoResults.showingLastResult()).toBeTruthy();
        expect(testReadingWithOneResult.showingLastResult()).toBeTruthy();
        expect(testReadingWithAnotherResult.showingLastResult()).toBeTruthy();
        expect(testReadingWithMoreThanTwoResults.showingLastResult()).toBeFalsy();
    });

    it('reports if there is a match before the current one to the UI', () => {
        const testReadingWithOneResult = new Reading("CAG", "CA", 1);
        testReadingWithOneResult.search();

        const testReadingWithAnotherResult = new Reading("CACAG", "CA", 1);
        testReadingWithAnotherResult.search();
        testReadingWithAnotherResult.goNext();

        expect(testReadingWithOneResult.showingFirstResult()).toBeTruthy();
        expect(testReadingWithAnotherResult.showingFirstResult()).toBeFalsy();
    });
});