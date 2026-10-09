import {greet, farewell} from './greetings.js';
import bookings from './object.js';
import counter from './class.js';

const name = 'John';
const mycounter = new counter();

// let farewellMessage = farewell("alice");
// let greetingMessage = greet(name);

// console.log(greetingMessage);
// console.log("\n");
// console.log(farewellMessage);

// console.log("\n");
// console.log(bookings.get('G3PLN75'));
// console.log("\n");

console.log(mycounter.value);
mycounter.increment();
console.log(mycounter.value);



