import { Input, NgModule, Component, Pipe, Directive, OnInit } from "@angular/core";


export class Reading {
    readingVal:string = '';
    searchVal:string = '';
    index:number = 0;
    instancesOfSearchString = [];
    matchShown:number = 1;

    constructor(reading:string, search:string, index:number) {
        this.index = index;
        this.readingVal = reading;
        this.searchVal = search;
        this.instancesOfSearchString = this.search();
        this.refreshUI();
    }

    // Loops through the reading getting the next index of the search each time,
    // Test:spec
    search() {
        let searchStrLen = this.searchVal.length;

        if (0 == searchStrLen) {
            return [];
        }

        let startIndex = 0, currentIndex, indices = [];

        const upperCaseReading = this.readingVal.toUpperCase();
        const upperCaseSearch = this.searchVal.toUpperCase();

        while((currentIndex = upperCaseReading.indexOf(upperCaseSearch, startIndex)) > -1) {
            indices.push(currentIndex + 1);
            startIndex = currentIndex + searchStrLen; 
        }

        return indices
    }

    //Test: Visual
    refreshUI(){
        this.instancesOfSearchString = this.search();
        this.hideBackButtonIfNecessary();
        this.hideForwardButtonIfNecessary();
        this.hideNowShowingIfNecessary();
    }

    // Test: Visual
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

    //Test:Visual
    indexOfElement() {
        return this.instancesOfSearchString[this.matchShown - 1];
    }

    //region Navigation
    // Test:spec
    goNext() {
        this.matchShown++;
        this.refreshUI();
    }

    // Test:spec
    goBack() {
        this.matchShown--;
        this.refreshUI();
    }

    //Test:Visual
    hideBackButtonIfNecessary() {
        let button = document.getElementById("back-btn-" + this.index);

        if (button == null) {
            return;
        }

        if (this.matchShown <= 1) {
            button.setAttribute('disabled', 'disabled');
        } else {
            button.removeAttribute("disabled");
        }
    }

    //Test:Visual
    hideForwardButtonIfNecessary() {
        let button = document.getElementById("forward-button-" + this.index);

        if (button == null) {
            return;
        }

        if (this.matchShown >= this.instancesOfSearchString.length) {
            button.setAttribute('disabled', 'disabled');
        } else {
            button.removeAttribute("disabled");
        }
    }
    //endregion

    // Test:spec
    matches() {
        return this.instancesOfSearchString.length;
    }

    // Test:spec
    hasResults() {
        return this.matches() > 0;
    }

    // Test:spec
    showingLastResult() {
        return this.matchShown >= this.matches();
    }

    showingFirstResult() {
        return this.matchShown == 1;
    }
}