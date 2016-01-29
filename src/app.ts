import {Router, RouterConfiguration} from "aurelia-router";
import * as route from "config/routes.json!json";

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Aurelia Demo";
        config.map(route);
        
        this.router = router;

    }
}