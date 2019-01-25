const today = new Date();
let weekday = today.toLocaleString("en-Us", {weekday: 'long'});
console.log(`Today is: ${weekday}`);

let hours = today.toLocaleString("en-Us", {hour: 'numeric', hour12: true});
let minutes = today.toLocaleString("en-Us",{minute: 'numeric'});
let seconds = today.toLocaleString("en-US",{second: 'numeric'});

console.log( `Current time: ${hours} : ${minutes} : ${seconds}`);