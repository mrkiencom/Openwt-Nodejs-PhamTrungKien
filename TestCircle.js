"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var c1 = new Circle_1.Circle(2.0);
var c2 = new Circle_1.Circle(6.6);
var c3 = new Circle_1.Circle(1.1);
var r1 = new Rectangle_1.Rectangle(1.2, 3.4);
console.log(c1.getArea());
console.log(c2.getArea());
console.log(c3);
console.log(r1);
console.log(r1.Rectangle());
console.log(r1.Rectangle(2, 4));
