﻿import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { PaStructureDirective } from "./paif.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { SimpleDataSource } from "./datasource.model";
import { Model } from "./repository.model";
import { LogService, LOG_SERVICE, SpecialLogService, 
            LogLevel, LOG_LEVEL } from "./log.service";

let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent, PaAttrDirective, PaModel, 
        PaStructureDirective, PaIteratorDirective,
        PaCellColor, PaCellColorSwitcher, ProductTableComponent, 
        ProductFormComponent, PaAddTaxPipe, PaCategoryFilterPipe,
        PaDiscountDisplayComponent, PaDiscountEditorComponent,
        PaDiscountPipe, PaDiscountAmountDirective],
    providers: [DiscountService, SimpleDataSource, Model, 
        { provide: LOG_LEVEL, useValue: LogLevel.ERROR },
        { provide: "debugLevel", useExisting: LOG_LEVEL },
        { provide: LogService, 
            deps: ["debugLevel"],
            useFactory: (level) => {
                let logger = new LogService();
                logger.minimumLevel = level;
                return logger;
            }
        }],
    bootstrap: [ProductComponent]
})
export class AppModule { }
