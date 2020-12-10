/*JavaScript Part 4 Functions, arrays & objects*/
// börja använda från och med nu

'use strict'   /*Strict mode*/
//use strict måste vara i början i sin javascriptkod




//functioner är väldigt viktigt ocg det används mycket
// FUNCTIONS = SIMPELFORM AV KOD SOM KAN ANVÄNDAS PÅ FLERA STÄLLEN


//A FUNCTION is a almost like a variable. but a variable holds a value and a function holds a piece of code.

//börja alltid funktion med function 
// använd functionsnamnet. kan anväds flera gånger

// vi måste kalla på finktionen för att använda den
//måste använda console.log för att få det till consolen


// function logger () {
//     console.log("")
// }

// logger();
// logger();
// logger();


// return = returnerar exempelvis ett värde eller det vi gör med vår function
// returnerar ett värde
// kallar på return
// är ett nyckelord



// fruitProcessor(3, 0);

// const applejuice = fruitProcessor(3, 0);
// console.log(applejuice);


// function calcAge(age1, age2) {
//     const resAge = age1 + age2;
//     return resAge;
// }


// generisk 
// istället för att repetera sig kan man skriva en function



// const num = Number(`23`);


// FUNCTION DECLARATION & EXPRESSION


// Lättast att dkriva funktioner på det här sättet
// function calcAge(birthYear) {
//     return 2020 - birthYear;
// }

// const age = 2020 - birthYear
//     return age;





// const myAge = calcAge(1997);
// console.log(myAge);
// // function EXPRESSION





// const calcAge2 = function (birthYear) {
//     return 2020 - birthYear;
// }

// const age2 = calcAge(1985);
// console.log(age2);
// // Function Expression



// ARRAYS
// arrya startar alltid på 0




//inte så bra att skriva
// const friend1 = 'Janne'; // exempelvis 0
// const friend2 = 'Nisse'; // 1
// const friend3 = 'Sara'; // 2


// [används vid arrays]
// /*best practise*/ const friends = ['Janne', 'Nisse', 'Sara'];
//                   console.log (friends);


// const years = new Array(1994, 1985, 2015, 2020);

// 0 = Janne
// console.log(friends[0]);
// // 2 = Sara
// console.log(friends[2]);
// console.log(friends.length);

// console.log(friends[friends.length -1]);

// friends[1] = 'Karin';
// console.log(friends);


// const firstName = "Erica";
// const erica = [firstName, 'Bergman', 2020-1994, 'developer', friends];
// console.log(erica);


// const calcAge = function (birthYear) {
//     return 2020 - birthYear;
// }
// const yearOfBirth = [1999, 1985, 2020, 2016, 1978];
// // array with birth years


// calcAge(yearOfBirth);
// console.log(calcAge(yearOfBirth));

// const firstAge = calcAge(yearOfBirth[0]);
// const secondAge = calcAge(yearOfBirth[1]);
// const thirdAge = calcAge(yearOfBirth[yearOfBirth.length -1]);
// console.log(firstAge, secondAge, thirdAge);


// friends.push('');
// console.log(friends);
// // push adds an element to the last index of the array 

// friends.unshift('');
// console.log(friends);
// // unshift adds an element in the beginning of the array

// friends.pop();
// console.log(friends);
// // pop cannot exwcute anything else than remove the laast element

// friends.shift();
// console.log(friends);


// console.log(friends.indexOf('Janne'));
// // es6 feature includes
// console.log(friends.includes('Janne'));

// OBJECTS 
// objects är inget spesicift för javascript
// TO DEFINE an object we use curly bracers


// const ericaOld = ['Erica', 'Bergman', 2020-1994, 'developer', friends];


// kom ihåg
// const erica = {
//     firstName: "Erica",
//     lastName: "Bergman",
//     age: 2020 - 1994,
//     job: "developer",
//     dogs: ["jack", "huntress", "frank", "azalea"]

// };
// console.log(erica);
// console.log(erica.lastName);

// const interestedIn = prompt(
//     ""
// );
// console.log(interestedIn);
// //console.log(erica.interestedIn);
// console.log(erica[interestedIn]);



// if (erica[interestedIn]) {
//     console.log(erica[interestedIn]);
// } else {
//     console.log('wrong request!');
// }


// Imon lektion om objekt 