"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sales = 123_456_789; // Numeric separator
let course = 'TypeScript'; // String literal
let is_published = true; // Boolean literal atomatically no need to tell the type of variable
// Type inference in TypeScript
//any
let level; // Variable with no initial value, type will be inferred as 'any'
function render(document) {
    console.log(document);
}
//arrays
let numbers = [1, 2, 3]; // TypeScript infers this as number[]
//tuples
let user = [1, 'Vineet']; // Tuple with a number and a string
//enums
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {})); // Enum with auto-incremented values starting from 1
let mySize = Size.Medium; // Using the enum
//# sourceMappingURL=index.js.map