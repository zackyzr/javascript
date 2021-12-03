let a;
a = 48 + 7 + 4 - 10;
console.log(a);

let country;
let continent;
let population;

country = "malaysia";
continent = "asia";
population = "3.2 million";

console.log(
  "I live in " +
    country +
    " in the continent of " +
    continent +
    " with a population of " +
    population
);

//dynamic datatypes

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = "yes!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

let isIsland = "penang"
let language

console.log(typeof isIsland);
console.log(typeof language);


//mutating variable
let age = "30";
console.log(age)
age = 31;
console.log(age);

const birthYear = 1991;
console.log (birthYear); 

now = 2021
let x = 10 + 15;
console.log(x);

x += 10; // x = x + 10
console.log(x);

let y = 10;

console.log (x < y)

console.log(now - 1996)


const now = 2021;
const ageZak = now - 1996;
const ageAsha = now - 2002;

console.log (now - 1996 > now - 2002);


let markHeight = 1.75;
let markWeight = 94;

let johnHeight = 1.95;
let johnWeight = 92;

let markBmi = markWeight / (markHeight * markHeight);
let johnBmi = johnWeight / (johnHeight * johnHeight);

console.log(markBmi);
console.log(johnBmi);

let markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);


let country;
let continent;
let population;

country = "malaysia";
continent = "asia";
population = "3.2 million";
//templete literal ` `
const where = `I live in ${country}, in ${continent} with a population of ${population}`;
console.log(where);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`string
with
lines`);


const age = `helloworld`;
const x = 18 - age;

if (isNaN(age)) {
  console.log(`${age} is not a valid age.`);
} else {
  if (age >= 18) {
    console.log(`Sareah is ${age} and is old enought to drive`);
  } else if (age < 18)
    console.log(
      `Sarah is ${age} she needs to wait ${x} years in order to be old enoguh to drive.`
    );
}


let markHeight = 1.75;
let markWeight = 50;

let johnHeight = 1.75;
let johnWeight = 94;

let markBmi = markWeight / (markHeight * markHeight);
let johnBmi = johnWeight / (johnHeight * johnHeight);

console.log(markBmi);
console.log(johnBmi);

if (isNaN(markBmi)) {
  console.log(`invalid input in mark's BMI`);
} else if (isNaN(johnBmi)) {
  console.log(`invalid input in john's BMI`);
} else {
  if (markBmi == johnBmi) {
    console.log(
      `Both mark(${markBmi}) and John's(${johnBmi}) BMI are the same`
    );
  } else if (markBmi > johnBmi) {
    console.log(
      `Mark's BMI(${markBmi}) is higher than John's BMI(${johnBmi}).`
    );
  } else if (johnBmi > markBmi) {
    console.log(
      `John's BMI(${johnBmi}) is higher than Mark's BMI(${markBmi}).`
    );
  }
}


//Conversion
const inputYear =`1991`;

console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number("jonas"));

console.log(String(23) + 5, 23 + 5)

// coercion



const age = 18;

if (age === 18) {
  console.log(`this person is ${age}, and is now an adult.`);
}

//== uses type coersion whilst === does not
//meaing '19' == 19 = true
//while '19' === 19 = false

const fav = Number(prompt("what's ur fav num?"));
console.log(fav);
console.log(typeof fav);

if(isNaN(prompt)){
	console.log(`${fav} is not a number`)
}
else 

{
	console.log(`${String(fav)} is an awesome number`)
}

//driver;scene
//goodvision
const hasDL = true;
const hasGV = true;

console.log(hasDL && hasGV);
console.log(hasDL || hasGV);
console.log(!hasDL);

const shouldD = hasDL && hasGV;

if (shouldD) {
  console.log(`Sarah can drive`);
} else {
  console.log(`Sarah should not drive`);
}

const isTired = false;

if ((isTired)) {
  console.log(`Sarah can drive but should not drive because she is tired.`);
} else if (hasDL && hasGV) {
  console.log(`Sarah can drive!`);
}

const ds1 = 97;
const ds2 = 112;
const ds3 = 101;

const dolphins = (ds1 + ds2 + ds3) / 3;

const ks1 = 109;
const ks2 = 95;
const ks3 = 106;

const koalas = (ks1 + ks2 + ks3) / 3;

console.log(dolphins);
console.log(koalas);

if (dolphins == koalas && dolphins >= 100) {
  console.log(`ITS A DRAW WITH A SCORE OF ${dolphins} for both teams`);
} else if (dolphins > koalas && dolphins >= 100) {
  console.log(
    `the Dolphins won with a score average of ${dolphins}! ${
      dolphins - koalas
    } points ahead of Koalas!`
  );
} else if (dolphins < koalas && koalas >= 100) {
  console.log(
    `the Koalas won with a score average of ${koalas}! ${
      koalas - dolphins
    } points ahead of Koalas!`
  );
} else {
  console.log(
    `Both the Dolphins and Koalas did not meet the minimum threshold of 100 points and therefore lost! Both teams only scored an average of ${dolphins} and ${koalas} respectively.`
  );
}
