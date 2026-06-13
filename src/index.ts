let sales = 123_456_789; // Numeric separator
let course = 'TypeScript'; // String literal
let is_published = true; // Boolean literal atomatically no need to tell the type of variable
let level; // Variable with no initial value, type will be inferred as 'any'

function render(document: any) {
console.log(document)
}