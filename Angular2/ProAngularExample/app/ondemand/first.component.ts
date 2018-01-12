import { Component, HostListener, Input } from '@angular/core';
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";

@Component({
    selector: "first",
    moduleId: module.id,
    templateUrl: "first.component.html"
})
export class FirstComponent {

    constructor(private repository: Model) {}

    category: string = "Soccer";
    highlighted: boolean = false;

    getProducts(): Product[] {
        return this.model == null ? [] : this.model.getProducts()
            .filter(p => p.category == this.category);
    }

    @Input("pa-model")
    model: Model;
}