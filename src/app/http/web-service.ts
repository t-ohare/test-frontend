import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class WebService {
 
    constructor(public http: HttpClient) {}
 
    getRemoteData(){
        return this.http.get('http://localhost:3000/read');
    }

    saveChanges(data) {
        let postData = data.map((item) => {
            return {"read":item.reading, "search":item.search};
        });

        data = {"reads":postData};

        return this.http.post('http://localhost:3000/read', data);
    }
 
}