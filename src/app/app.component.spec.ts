import { TestBed } from "@angular/core/testing";

import { AppComponent } from "./app.component";

describe("AppComponent", () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
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