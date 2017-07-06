export class Model {
    user; 
    items;

constructor() {
    this.user = "Brett";
    this.items = [new TodoItem("Buy Flowers", false),
    new TodoItem("Buy Flowers", false),
    new TodoItem("Buy Flowers", false),
    new TodoItem("Buy Flowers", false)]
    }
}

export class TodoItem{
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}