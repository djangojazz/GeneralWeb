"use strict";
var core_1 = require("@angular/core");
var commonStyles = {
    border: "black solid 4px",
    color: "white"
};
exports.HighlightTrigger = core_1.trigger("rowHighlight", [
    core_1.state("selected", core_1.style([commonStyles, {
            backgroundColor: "lightgreen",
            fontSize: "20px"
        }])),
    core_1.state("notselected", core_1.style([commonStyles, {
            backgroundColor: "lightsalmon",
            fontSize: "12px"
        }])),
    core_1.state("void", core_1.style({
        transform: "translateX(-50%)"
    })),
    core_1.transition("* => notselected", core_1.animate("200ms")),
    core_1.transition("* => selected", [core_1.animate("400ms 200ms ease-in", core_1.style({
            backgroundColor: "lightblue",
            fontSize: "25px"
        })),
        core_1.group([
            core_1.animate("250ms", core_1.style({
                backgroundColor: "lightcoral"
            })),
            core_1.animate("450ms", core_1.style({
                fontSize: "30px"
            }))
        ]),
        core_1.animate("200ms")]),
    core_1.transition("void => *", core_1.animate("500ms"))
]);
//# sourceMappingURL=table.animations.js.map