import {HttpClient} from "aurelia-http-client";
import {inject} from "aurelia-framework";
import * as _ from "lodash";

@inject(HttpClient)
export class ContactListing{
    contacts: Array<IContact> = [];
    
    constructor(private httpClient: HttpClient){}
    
    activate(){
        this.httpClient.get("http://api.randomuser.me/?results=20")
            .then((data) => {
                this.contacts = _.map(JSON.parse(data.response).results, (d: any) => {
                    return d.user;
                });
            });
        
    }
}