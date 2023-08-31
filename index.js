const TestObject = { first: "test", second: "upddated", third: "axios", fourth: "Dog" };


// sorted Object 
const sorted45Object = Object.fromEntries(Object.entries(TestObject).sort(([x, a], [y, b]) => a.localeCompare(b)));
console.log("sorted-string-object", sorted45Object);


const numericalObject = { first: 21, second: 25, third: 200, fourth: 210, fifth: 15 };



// sorting objetc keys 
const sortedObjectKeys = Object.fromEntries(Object.entries(numericalObject).sort(([x, a], [y, b]) => x.localeCompare(y)));
console.log("sorted-Object-keys-", sortedObjectKeys);



// ascending order 
const sortedNumericalObject = Object.fromEntries(Object.entries(numericalObject).sort(([x, a], [y, b]) => a - b));
console.log("sortedNumericalObject", sortedNumericalObject);


// enter the new property in object or updated property in project 

numericalObject["sixth"] = 600;
numericalObject["second"] = 250
console.log("added new property in object   ", numericalObject);

// delete the property from object 


delete numericalObject["fifth"];
console.log("deleted property from object ", numericalObject);


// filtering object properties 


const matched = ["first","second"];

const filteredObject = Object.fromEntries(Object.entries(numericalObject).filter(([d,f]) => f > 210));
const filteredObjectKeys = Object.fromEntries(Object.entries(numericalObject).filter(([d,f]) => matched.includes(d)));
console.log("filtered-object",filteredObject)
console.log("filtered-object-keys",filteredObjectKeys)






// Array operations 

const stringArray = ["dot.net", "html", "bootstrap", "javacript", "reactJS"];
console.log("reversed-Array", stringArray.reverse());

console.log("sorted-ascending-Array", stringArray.sort());

console.log('descending-array ', stringArray.sort((a, b) => b.localeCompare(a)));


// find maximum from number array 

const numericalArray = [120, 10, 5, 21, 22, 5, 2];

const maximum = numericalArray.reduce((a, b) => Math.max(a, b), -Infinity);
console.log("maximum", maximum);

const Minimum = numericalArray.reduce((a, b) => Math.min(a, b), Infinity);
console.log("Minimum", Minimum);
