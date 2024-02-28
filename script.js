//!Pirma užduotis

// console.log("Hello world");

// alert("I love JavaScript");

// const answer = confirm("Ready to learn more?");
// console.log(answer);

// const number = prompt("Please enter a number from 1 to 10");
// console.log(number);

//!Antra Užduotis
// const name = prompt("What's your name?");
// const birthDay = "gegužės 12";
// console.log(name, "yra gimęs", birthDay);

//!Trečia užduotis
const price1 = prompt("What are the price of the item including VAT?");
console.log("Prekės kaina su PVM:" + price1 + "€");

 const VAT = (price1 * 21 / 100).toFixed(2);
 console.log("PVM:" + VAT + "€");

 const price2 = (price1 - VAT).toFixed(2);
 console.log("Prekės kaina be PVM:" + price2 + "€");