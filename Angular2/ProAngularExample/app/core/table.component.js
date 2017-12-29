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
var core_1 = require("@angular/core");
var repository_model_1 = require("../model/repository.model");
// import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
// import { Observer } from "rxjs/Observer";
var TableComponent = (function () {
    function TableComponent(model) {
        this.model = model;
    }
    TableComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    TableComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    TableComponent.prototype.deleteProduct = function (key) {
        this.model.deleteProduct(key);
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: "paTable",
            moduleId: module.id,
            templateUrl: "table.component.html"
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map