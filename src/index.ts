let sales = 123_456_789; // Numeric separator
let course = 'TypeScript'; // String literal
let is_published = true; // Boolean literal atomatically no need to tell the type of variable

// Type inference in TypeScript
//any
let level; // Variable with no initial value, type will be inferred as 'any'

function render(document: any) {
console.log(document)
}

//arrays

let numbers = [1, 2, 3]; // TypeScript infers this as number[]

//tuples
let user: [number, string] = [1, 'Vineet'];// Tuple with a number and a string

//enums
enum Size { Small = 1, Medium, Large } // Enum with auto-incremented values starting from 1
let mySize: Size = Size.Medium; // Using the enum
console. log (mySize); // Output: 2 (the value of Size.Medium)

//functions
function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2020) {
        return income * 1.2; // Old tax calculation
    } else {
        return income * 1.3; // New tax calculation
    }
}

console.log(calculateTax(10_000, 2019)); // Output: 12000
console.log(calculateTax(10_000, 2021)); // Output: 13000    

//objects
let employee: { id: number; name: string } = {
    id: 1,
    name: 'Vineet'
};


