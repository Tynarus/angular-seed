import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "tyn-app",
    template: require("./app.component.pug"),
    styleUrls: [ "./app.component.scss" ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    
    public constructor() {}
    
    public ngOnInit(): void {}
    
}