import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class WebService {
 
    constructor(public http: HttpClient) {
        console.log('Hello');
    }
 
    getRemoteData(){
        return this.http.get('http://localhost:3000/read');
    }
 
}