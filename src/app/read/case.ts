import { Input, NgModule, Component, Pipe, Directive, OnInit } from "@angular/core";


export class Case {
    reading:string = '';
    search:string = '';
    index:number = 0;
    instancesOfSearchString = [];
    showingMatch:number = 1;

    constructor(reading:string, search:string, index:number) {
        this.index = index;
        this.reading = reading;
        this.search = search;
        this.indicesOfSearch();
        this.refreshUI();
    }

    // Loops through the reading getting the next index of the search each time,
    indicesOfSearch() {
        let searchStrLen = this.search.length;

        if (0 == searchStrLen) {
            return [];
        }

        let startIndex = 0, currentIndex, indices = [];

        const upperCaseReading = this.reading.toUpperCase();
        const upperCaseSearch = this.search.toUpperCase();

        while((currentIndex = upperCaseReading.indexOf(upperCaseSearch, startIndex)) > -1) {
            indices.push(currentIndex + 1);
            startIndex = currentIndex + searchStrLen; 
        }

        this.instancesOfSearchString = indices;
    }

    refreshUI(){
        this.hideBackButtonIfNecessary();
        this.hideForwardButtonIfNecessary();
        this.hideNowShowingIfNecessary();
    }

    hideNowShowingIfNecessary() {
        let element = document.getElementById("positions-" + this.index);

        if (element == null) {
            return;
        }

        if (0 == this.matches()) {
            element.classList.add("hidden");
        } else {
            element.classList.remove("hidden");
        }
    }

    indexOfElement() {
        return this.instancesOfSearchString[this.showingMatch - 1];
    }

    //region Navigation
    goNext() {
        this.showingMatch++;
        this.refreshUI();
    }

    goBack() {
        this.showingMatch--;
        this.refreshUI();
    }

    hideBackButtonIfNecessary() {
        let button = document.getElementById("back-btn-" + this.index);

        if (button == null) {
            return;
        }

        if (this.showingMatch <= 1) {
            button.setAttribute('disabled', 'disabled');
        } else {
            button.removeAttribute("disabled");
        }
    }

    hideForwardButtonIfNecessary() {
        let button = document.getElementById("forward-button-" + this.index);

        if (button == null) {
            return;
        }

        if (this.showingMatch >= this.instancesOfSearchString.length) {
            button.setAttribute('disabled', 'disabled');
        } else {
            button.removeAttribute("disabled");
        }
    }
    //endregion

    matches() {
        return this.instancesOfSearchString.length;
    }

    showPositionBlock() {
        return this.matches() > 0;
    }

    forwardShouldBeDisabled() {
        return this.showingMatch >= this.matches();
    }

    backShouldBeDisabled() {
        return this.showingMatch >= 1;
    }
}