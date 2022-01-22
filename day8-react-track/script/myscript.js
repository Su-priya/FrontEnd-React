"use strict";
var users = ['Batman', 'Superman', 'Aquaman', 'Cyborg', 'Flash', 'Wonder women'];
// union types
// let info:(number | string | boolean) = false;
// let product:any;
function adder(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2 + " is the total";
}
;
var Person = /** @class */ (function () {
    function Person(ncity) {
        this.city = "default city";
        this.power = 5;
        this.city = ncity;
    }
    return Person;
}());
;
function init() {
    document.body.innerHTML += "<h1>" + adder(8, 9) + "</h1>";
}
document.addEventListener("DOMContentLoaded", init);
