"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require("@angular/core/testing");
var first_component_1 = require("../app/ondemand/first.component");
var product_model_1 = require("../app/model/product.model");
var repository_model_1 = require("../app/model/repository.model");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var TestComponent = (function () {
    function TestComponent(model) {
        this.model = model;
    }
    __decorate([
        core_1.ViewChild(first_component_1.FirstComponent), 
        __metadata('design:type', first_component_1.FirstComponent)
    ], TestComponent.prototype, "firstComponent", void 0);
    TestComponent = __decorate([
        core_1.Component({
            template: "<first [pa-model]=\"model\"></first>"
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model])
    ], TestComponent);
    return TestComponent;
}());
describe("FirstComponent", function () {
    var fixture;
    var component;
    var debugElement;
    var mockRepository = {
        getProducts: function () {
            return [
                new product_model_1.Product(1, "test1", "Soccer", 100),
                new product_model_1.Product(2, "test2", "Chess", 100),
                new product_model_1.Product(3, "test3", "Soccer", 100),
            ];
        }
    };
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [first_component_1.FirstComponent, TestComponent],
            providers: [
                { provide: repository_model_1.Model, useValue: mockRepository }
            ]
        });
        testing_1.TestBed.compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(TestComponent);
            component = fixture.componentInstance.firstComponent;
            debugElement = fixture.debugElement.query(platform_browser_1.By.directive(first_component_1.FirstComponent));
        });
    }));
    it("receives the model through an input property", function () {
        component.category = "Chess";
        fixture.detectChanges();
        var products = mockRepository.getProducts()
            .filter(function (p) { return p.category == component.category; });
        var componentProducts = component.getProducts();
        for (var i = 0; i < componentProducts.length; i++) {
            expect(componentProducts[i]).toEqual(products[i]);
        }
        expect(debugElement.query(platform_browser_1.By.css("span")).nativeElement.textContent)
            .toContain(products.length);
    });
});
//# sourceMappingURL=first.component.spec.js.map