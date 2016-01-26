import {Router, RouterConfiguration} from "aurelia-router";

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Aurelia Demo";
        config.map([
            {
                route: ["", "home"],
                moduleId: "home",
                name: "home",
                title: "Home",
                nav: true
            }
        ]);
        
        this.router = router;

    }
}