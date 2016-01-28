import {HttpClient} from "aurelia-http-client";
import {inject} from "aurelia-dependency-injection";

@inject(HttpClient)
export class EditContact {
    contact: IContact;

    constructor(private httpClient: HttpClient) {
        //fired when the Class is created
    }

    activate(params) {
        //fired when the page is loaded
        let contactId = params.id;
        this.httpClient.get(`https://randomuser.me/api/`)
            .then((data: any) => {
                this.contact = JSON.parse(data.response).results[0].user;
                console.log(this.contact);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    deactivate() {
        //fired when the route is changed
    }
}