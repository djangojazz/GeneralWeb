"use strict";
var testing_1 = require("@angular/core/testing");
var first_component_1 = require("../app/ondemand/first.component");
var product_model_1 = require("../app/model/product.model");
var repository_model_1 = require("../app/model/repository.model");
describe("FirstComponent", function () {
    var fixture;
    var component;
    var mockRepository = {
        getProducts: function () {
            return [
                new product_model_1.Product(1, "test1", "Soccer", 100),
                new product_model_1.Product(2, "test2", "Chess", 100),
                new product_model_1.Product(3, "test3", "Soccer", 100),
            ];
        }
    };
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [first_component_1.FirstComponent],
            providers: [
                { provide: repository_model_1.Model, useValue: mockRepository }
            ]
        });
        fixture = testing_1.TestBed.createComponent(first_component_1.FirstComponent);
        component = fixture.componentInstance;
    });
    it("filters catgories", function () {
        component.category = "Chess";
        expect(component.getProducts().length).toBe(1);
        component.category = "Soccer";
        expect(component.getProducts().length).toBe(2);
        component.category = "Running";
        expect(component.getProducts().length).toBe(0);
    });
});
//# sourceMappingURL=first.component.spec.js.map