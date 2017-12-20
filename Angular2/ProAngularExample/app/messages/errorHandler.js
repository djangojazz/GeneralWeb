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
var message_service_1 = require("./message.service");
var message_model_1 = require("./message.model");
var MessageErrorHandler = (function () {
    function MessageErrorHandler(messageService) {
        this.messageService = messageService;
    }
    MessageErrorHandler.prototype.handleError = function (error) {
        var _this = this;
        var msg = error instanceof Error ? error.message : error.toString();
        setTimeout(function () { return _this.messageService
            .reportMessage(new message_model_1.Message(msg, true)); }, 0);
    };
    MessageErrorHandler = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageErrorHandler);
    return MessageErrorHandler;
}());
exports.MessageErrorHandler = MessageErrorHandler;
//# sourceMappingURL=errorHandler.js.map