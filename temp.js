var a = false;
console.log(a);
var b = 56;
console.log(b);
var c = "string";
console.log(c);
var d = 10n;
console.log(d);
console.log(Number.MAX_SAFE_INTEGER);
var e = [1, 2, 3, 4, 5];
var f = [1, 2, 3, 4, 6, 7, 8];
// Tubles
var g = ["string", 3];
var h = [1];
// Objects.
var i;
i = { name: "John Doe", age: 30 };
console.log(i);
// optional property.
var j;
j = { prop1: "Hello" };
// random object
var k;
k = { prop1: "zain", prop2: 2, speciality: "web development" };
// enums
// Allows you to define a set of constants that will never change.
// Provides numaric and string based enums.
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
;
console.log(Direction.up, Direction.right);
// string based enums
var Animals;
(function (Animals) {
    Animals[Animals["dog"] = 0] = "dog";
    Animals[Animals["dog"] = 1] = "dog";
    Animals[Animals["cat"] = 2] = "cat";
    Animals[Animals["cat"] = 3] = "cat";
    Animals[Animals["bird"] = 4] = "bird";
    Animals[Animals["bird"] = 5] = "bird";
})(Animals || (Animals = {}));
;
var l = { name: "zain", age: 34 };
// classes
var C = /** @class */ (function () {
    function C(name) {
        this.name = name;
        this.name = name;
    }
    return C;
}());
