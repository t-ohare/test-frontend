import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class WebService {
 
    constructor(public http: HttpClient) {}
 
    getRemoteData(){
        return this.http.get('http://localhost:3000/read');
    }

    saveChanges(postData) {
        const postBody = {"reads":postData};

        return this.http.post('http://localhost:3000/read', postBody);
    }
 
}