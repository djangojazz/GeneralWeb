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
var cellColor_directive_1 = require("./cellColor.directive");
var PaCellColorSwitcher = (function () {
    function PaCellColorSwitcher() {
    }
    PaCellColorSwitcher.prototype.ngOnChanges = function (changes) {
        if (this.contentChild != null) {
            this.contentChild.setColor(changes["modelProperty"].currentValue);
        }
    };
    __decorate([
        core_1.Input("paCellDarkColor"), 
        __metadata('design:type', Boolean)
    ], PaCellColorSwitcher.prototype, "modelProperty", void 0);
    __decorate([
        core_1.ContentChild(cellColor_directive_1.PaCellColor), 
        __metadata('design:type', cellColor_directive_1.PaCellColor)
    ], PaCellColorSwitcher.prototype, "contentChild", void 0);
    PaCellColorSwitcher = __decorate([
        core_1.Directive({
            selector: "table"
        }), 
        __metadata('design:paramtypes', [])
    ], PaCellColorSwitcher);
    return PaCellColorSwitcher;
}());
exports.PaCellColorSwitcher = PaCellColorSwitcher;
