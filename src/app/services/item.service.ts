import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class ItemService {
    
    constructor(private http: HttpClient) { }

    ngOnInit() {

    }
    
    items: any [] = [];

    getItems(){
       return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo');
    }
}