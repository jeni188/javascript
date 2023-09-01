// 1. Question: How can you use an if/else statement in JavaScript to check if a number is positive or
// negative? Provide a code example for both cases.

// let number = -5;

// // Using if/else statement

// if (number> 0) {
// console.log("The number is positive");
// } else if (number<0) {
// console.log("The number is negative.");
// } else {
// console.log("The number is zero.");
// }


// 2. Question: Write a JavaScript program to check if a user is eligible to vote (18 years or older) using
// if/else statement. Provide the code to handle both cases.
// let age = 18;
// if(age>=18){
//     console.log("you are eligible for vote");

// }
// else{
//     console.log("you are not eligible for vote");
// }


// 3. Question: Create a JavaScript function that uses a switch case to determine the day of the week
// based on a given number (1-7). Assume 1 is Sunday and 7 is Saturday.

// function getdayofweek(dayNumber){
//     switch(dayNumber){
//         case 1:
//             return "sunday";
//             case 2:
//                 return "monday";
//                 case 3:
//                 return "tuesday";
//                 case 4:
//                 return "wednesday";
//                 case 5:
//                 return "thursday";
//                 case 6:
//                 return "friday";
//                 case 7:
//                 return "saturday";
//             default:
//                 return "invlaid day number"; 
//     }
// }
// console.log(getdayofweek(4)); 


// 4. Question: How can you use an if/else statement to check if a given string is longer than 10
// characters or not?


// let inputstring = "hi i am jeni";

// if(inputstring.length>10){
//     console.log("The length of this string is 10");
// }
// else{
//     console.log("The length of this string is less then 10")
// }



// 5. Question: Write a JavaScript program to determine the grade of a student based on their exam
// score using if/else statement. Assume scores are in the range of 0-100.

// let score = 80;
// let grade;

// if(score>=90){
// grade="A";
// }
// else if(score>=80){
//     grade ="B";
// }
// else if(score>=70){
//     grade="C";
// }
// else if(score>=60){
//     grade="D";
// }
// else{
//     grade="F";
// }
// console.log(`your grade is :${grade}`)

// 6. Question: Implement a JavaScript function that takes a month number (1-12) as input and returns
// the number of days in that month using switch case.

// function getDaysInMonth(monthNumber) {
//     switch (monthNumber) {
//     case 2:
//     return 28;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//     return 30;
//     default:
//     return 31;
//     }
//     }
    
//     console.log(getDaysInMonth(2));


// 7. Question: How can you use an if/else statement to check if a given year is a leap year or not?
// let year = 2021;

// // Using if/else statement
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
// console.log(`${year} is a leap year.`);
// } else {
// console.log(`${year} is not a leap year.`);
// }

// 8. Question: Create a JavaScript program that determines if a given variable is an array or not, using
// if/else statement.

// let data = [1, 2, 3];

// // Using if/else statement
// if (Array.isArray(data)) {
// console.log("The variable is an array.");
// } else {
// console.log("The variable is not an array.");
// }

// 9. Question: Write a JavaScript function to calculate the discount amount based on the purchase
// amount using switch case. If the purchase amount is less than 100, apply a 5% discount; otherwise,
// apply a 10% discount.

// function calculateDiscount(purchaseAmount) {
//     switch (true) {
//     case (purchaseAmount < 100):
//     return purchaseAmount * 0.05;
//     default:
//     return purchaseAmount * 0.1;
//     }
//     }
//     console.log(calculateDiscount(120));


// 10. Question: Implement a JavaScript program to determine the type of a variable (string, number,
//     boolean, object, undefined, null) using if/else statements.

// function getType(variable) {
//     if (typeof variable === `string`) {
//     return "string";
//     } else if (typeof variable === 'number') {
//     return "number";
//     } else if (typeof variable === 'boolean') {
//     return "boolean";
//     } else if (typeof variable === 'object') {
//     if (variable === null) {
//     return "null";
//     } else {
//     return object;
//     }
//     } else if (typeof variable === undefined) {
//     return undefined;
//     } else {
//     return unknown;
//     }
//     }
    
//     console.log(getType("hello"));


                
                
