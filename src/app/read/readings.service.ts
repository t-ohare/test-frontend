import { Injectable } from '@angular/core';
import { Reading } from './reading';
import { WebService } from '../http/web-service';

@Injectable({
  providedIn: 'root',
})


 

export class ReadingsService {
    reads = [];

    constructor(public webService: WebService) {
        const ctx = this;

        this.webService.getRemoteData().subscribe(data => {
            const reads = Object.keys(data).map(function(idx){
                return data[idx];
            }).forEach((read) => {
                let newRead = new Reading(read.read, read.search, this.reads.length + 1);
                ctx.reads.push(newRead);
            });
            console.log(reads, 'reads');
        });
    }

    addBlankReading() {
        let newReading = new Reading("","", this.reads.length + 1);
        this.reads.push(newReading);
    }

    getReadings() {
        var dummyReading = new Reading("CADT", "CA", this.reads.length + 1);
        this.reads.push(dummyReading);

        return this.reads
    }

    totalRead() {
        return this.reads.length;
    }

    totalFound() {
        let totalAmount = 0;
        this.reads.forEach( reading => totalAmount = totalAmount + reading.matches());
        return totalAmount;
    }

    reindex() {
        this.reads.map((item, index) => {
            item.index = index + 1;
        });
    }
}
