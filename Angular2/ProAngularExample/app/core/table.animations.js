"use strict";
var core_1 = require("@angular/core");
exports.HighlightTrigger = core_1.trigger("rowHighlight", [
    core_1.state("selected", core_1.style({
        backgroundColor: "lightgreen",
        fontSize: "20px"
    })),
    core_1.state("notselected", core_1.style({
        backgroundColor: "lightsalmon",
        fontSize: "12px"
    })),
    core_1.transition("selected => notselected", core_1.animate("200ms")),
    core_1.transition("notselected => selected", core_1.animate("400ms"))
]);
//# sourceMappingURL=table.animations.js.map