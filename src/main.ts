import {Aurelia} from "aurelia-framework";
import "bootstrap";
import "bootstrap-material";

export function configure(aurelia: Aurelia){
    $.material.init();
    
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .feature("components");
        
        aurelia.start()
            .then(a => a.setRoot());
}