//1.Prove if a numbre can be devided by number 3:



let a = 150;
if (a % 5 === 0) {
  console.log(" the number is divisible by 5");
} else {
  console.log(" the number is not divisible by 5");
}
//2.write a program to proces the given string:
const string = "aposfksvlfqwr  jpenowbksfanpsgjdihbosjnfkapbjvn";
console.log("2.", string);

//3.Prove if a variable is a string or a number:
const nr = "hello";
if (typeof nr === "string") {
  console.log("3. It is a string");
} else {
  console.log("3. type of it is not a string but it is a: ", typeof nr);
}

// Prove if the given  input can complete one of the 2 given options :

const v = 10;
if (typeof v === "string" || v < 100) {
  console.log("4. conditions met, the number is less then 100");
} else {
  console.log("4. conditions unmet");
}

//5.Prove if the given variables are  strings or a booleans;
let v2 = "lion";
v2 = "pet";
if (typeof v2 === "boolean" || typeof v2 === "string") {
  console.log("5. conditions met");
} else {
  console.log("5. conditons unmet");
}

//6.    Print the given value by comparing with 3 diff Variables if none type empty

const newVariable = "c";

if (newVariable === "a") {
  console.log("6. the variable is a");
}
if (newVariable === "b") {
  console.log("6. the variable is b");
} else if (newVariable === "c") {
  console.log("6. the variable is c");
} else {
  console.log("6. the variable is empty");
}
