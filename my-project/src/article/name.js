"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Name = /** @class */ (function () {
    function Name(name) {
        this.name = name;
        this.age = 25;
        this.male = true;
        this.getName = function () {
            return this.name;
        };
    }
    return Name;
}());
exports.Name = Name;
