//variable declarations
const message = 'Hello, world!';
let count = 5;

//function definition
function greet(name) {
    let greeting = 'Hello, ' + name;
    console.log(greeting);
}

//conditional statement
if (count > 0) {
    console.log(message);
    count--;
} else {
    console.log('Count is zero.');
}

//calling the function
greet('Alice');