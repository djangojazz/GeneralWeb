"use strict";
var Model = (function () {
    function Model() {
        this.user = "Brett";
        this.items = [new TodoItem("Buy Flowers", false),
            new TodoItem("Buy Flowers", false),
            new TodoItem("Buy Flowers", false),
            new TodoItem("Buy Flowers", false)];
    }
    return Model;
}());
exports.Model = Model;
var TodoItem = (function () {
    function TodoItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return TodoItem;
}());
exports.TodoItem = TodoItem;
