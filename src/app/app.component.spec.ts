import { TestBed } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                AppComponent
            ]
        });
    });

    // Extremely basic example test. Just checks that the created Component is the type we expect.
    it("should create the Angular component", () => {
        let fixture = TestBed.createComponent(AppComponent);

        expect(fixture.componentInstance instanceof AppComponent).toBe(true);
    });

});