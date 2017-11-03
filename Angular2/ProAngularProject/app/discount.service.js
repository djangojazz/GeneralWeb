"use strict";
var DiscountService = (function () {
    function DiscountService() {
        this.discountValue = 10;
    }
    Object.defineProperty(DiscountService.prototype, "discount", {
        get: function () {
            return this.discountValue;
        },
        set: function (newValue) {
            this.discountValue = newValue || 0;
        },
        enumerable: true,
        configurable: true
    });
    DiscountService.prototype.applyDiscount = function (price) {
        return Math.max(price - this.discountValue, 5);
    };
    return DiscountService;
}());
exports.DiscountService = DiscountService;
