import { Injectable } from '@angular/core';
import { Case } from './case';
import { WebService } from '../http/web-service';

@Injectable({
  providedIn: 'root',
})

export class CasesService {
    reads = [];

    constructor(public webService: WebService) {
        const ctx = this;

        this.webService.getRemoteData().subscribe(data => {
            const reads = Object.keys(data).map(function(idx){
                return data[idx];
            }).forEach((read) => {
                let newRead = new Case(read.read, read.search, this.reads.length + 1);
                ctx.reads.push(newRead);
            });
        });
    }

    save() {
        const postData = this.reads
        this.webService.saveChanges(postData).subscribe(data => {
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

    addBlankReading() {
        let newReading = new Case("","", this.reads.length + 1);
        this.reads.push(newReading);
    }

    getReadings() {
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
