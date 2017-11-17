import { Directive, OpaqueToken, Inject, HostBinding } from "@angular/core";
export const VALUE_SERVICE = new OpaqueToken("value_service");

@Directive({
    selector: "[paDisplayValue]"
})
export class PaDisplayValueDirective {
    constructor(@Inject(VALUE_SERVICE) serviceValue: string) {
        this.elementContent = serviceValue;
    }

    @HostBinding("textContent")
    elementContent: string;
}