interface IRoute{
    route: string | Array<string>;
    moduleId: string;
    title?: string;
}

declare module "config/routes.json!json"{
    var routes: Array<IRoute>;
    export = routes;
}


interface IContact{
    name: {
        title: string;
        first: string;
        last: string;
    },
    location: {
        street: string;
        city: string;
        state: string;
        zip: string;
    },
    email: string;
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumnail: string;
    }
}