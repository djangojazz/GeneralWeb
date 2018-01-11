"use strict";
var testing_1 = require("@angular/core/testing");
var first_component_1 = require("../app/ondemand/first.component");
describe("FirstComponent", function () {
    var fixture;
    var component;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [first_component_1.FirstComponent]
        });
        fixture = testing_1.TestBed.createComponent(first_component_1.FirstComponent);
        component = fixture.componentInstance;
    });
    it("is defined", function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=first.component.spec.js.map