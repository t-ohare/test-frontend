import { Injectable } from '@angular/core';
import { Reading } from './reading';
import { WebService } from '../http/web-service';

@Injectable({
  providedIn: 'root',
})

export class ReadingService {
    reads:Reading[] = [];

    //Test:Visual
    constructor(public webService: WebService) {
        this.webService.getRemoteData().subscribe(data => {
            const reads = Object.keys(data).map(function(idx){
                return data[idx];
            }).forEach((read) => {
                let reading = new Reading(read.read, read.search, this.reads.length + 1);
                this.addReading(reading);
            });
        });
    }

    buildPostData() {
        return this.reads.map((item) => {
            return {"read":item.readingVal, "search":item.searchVal};
        });
    }

    //Test:Other side of boundary
    save() {
        this.webService.saveChanges(this.buildPostData()).subscribe(data => {
            const error = data["exception"];
            let messageContainer = document.getElementById("save-failed");

            if (typeof(error) == "undefined") {
                messageContainer = document.getElementById("save-success");
            }

            messageContainer.classList.remove("hidden");

            setTimeout(() => {
                messageContainer.classList.add("hidden");
            }, 2000);
        });
    }

    //Test:Spec
    addBlankReading() {
        let newReading = new Reading("","", this.reads.length + 1);
        this.reads.push(newReading);
    }

    //Test:Spec
    addReading(reading:Reading) {
        this.reads.push(reading);
    }

    //Test:Spec
    getReadings() {
        return this.reads
    }

    //Test:Spec
    totalRead() {
        return this.reads.length;
    }

    //Test:Spec
    totalFound() {
        let totalAmount = 0;
        this.reads.forEach( reading => totalAmount = totalAmount + reading.matches());
        
        return totalAmount;
    }

    //Test:Visual
    reindex() {
        this.reads.map((item, index) => {
            item.index = index + 1;
        });
    }
}
