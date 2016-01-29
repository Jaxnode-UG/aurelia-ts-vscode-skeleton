import {FrameworkConfiguration} from "aurelia-framework";

export function configure(config: FrameworkConfiguration){
    let resources = [
        "./contact-display.html"
    ];

   config.globalResources(resources);
}