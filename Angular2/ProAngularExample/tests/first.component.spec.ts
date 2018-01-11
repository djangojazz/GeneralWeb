import { TestBed, ComponentFixture } from "@angular/core/testing";
import { FirstComponent } from "../app/ondemand/first.component";
import { Product } from "../app/model/product.model";
import { Model } from "../app/model/repository.model";

describe("FirstComponent", () => {

    let fixture: ComponentFixture<FirstComponent>;
    let component: FirstComponent;

    let mockRepository = {
        getProducts: function() {
            return [
                new Product(1, "test1", "Soccer", 100),
                new Product(2, "test2", "Chess", 100),
                new Product(3, "test3", "Soccer", 100),
            ]
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FirstComponent],
            providers: [
                { provide: Model, useValue: mockRepository}
            ]
        });
        fixture = TestBed.createComponent(FirstComponent);
        component = fixture.componentInstance;
    });

    it("filters catgories", () => {
        component.category = "Chess"
        expect(component.getProducts().length).toBe(1);
        component.category = "Soccer"
        expect(component.getProducts().length).toBe(2);
        component.category = "Running"
        expect(component.getProducts().length).toBe(0);
    });
});