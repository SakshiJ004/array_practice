//length=returns the size of an array
let fruits=["banana","orange","apple","mango"]
console.log(fruits.length);

//toString method=converts an array to a string of (comma separated) array values.
const text=["sakshi","jadhav","student"]
console.log(text.toString())

//push() method adds a new element to an array (at the end)
const text1=["Honda","Lamborghini","Hyundai","Audi"];
let result=text1.push("renault");
console.log(text1);

//shift() method removes the first array element and "shifts" all other elements to a lower index.
const text2=["sakshi","ketaki","karishma","riya"];
text2.shift()
console.log(text2);

//indexOf=searches an array for an element value and returns its position.
let fruits1=["Apple","Orange","Apple","Mango"]
console.log(fruits1.indexOf("Apple"))