///<reference path="../typings/globals/core-js/index.d.ts"/>
///<reference path="../typings/globals/node/index.d.ts"/>
"use strict";
//import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { AppModule } from "./app.module";
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_module_ngfactory_1 = require("../aot/app/app.module.ngfactory");
core_1.enableProdMode();
//platformBrowserDynamic().bootstrapModule(AppModule);
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
