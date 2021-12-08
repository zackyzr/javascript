"use strict";
/*
let hasDL = false;

const passTest = true;

if (passTest)
{
hasDL = true;
}
if (hasDL) console.log(`i has DL`)


function logger() {
  console.log(`my name is zack`);
}
//calling the function/ running/ invoker
logger();

function fruitP(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juices with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitP(5,2);
console.log(appleJuice)

function describeCunt(coun, population, capital){

	const temp = `${coun} has a population of ${population} and it's capital is ${capital}.`
	return temp;
}


//function declaration

function perOfWorld(pop) {
  return (pop / 7900) * 100;
}

console.log(perOfWorld(1441));

//function expression

const perOfWorld1 = function (pop) {
  return (pop / 7900) * 100;
};

console.log(perOfWorld1(332));


//arrow function	

const calAge = birthYear => 2037 - birthYear;
const age = calAge(1991);
console.log(age);

const retirementYears = birthYear => {
	const age1 = 2037 - birthYear;
	const retirement = 65 - age1;
	return retirement;
}

console.log(retirementYears(1991));

/*perofworld is function name. pop is the fucntion input
function perofWorld(pop) {
  (pop / 7900) * 100;
};
//*-/comment here!!!


const perofWorld = (pop) => (pop/7900) * 100;
let per = perofWorld(1441)
console.log(per)

const perOfWorld1 = function (pop) {
 return (pop / 7900) * 100;
};
per = perOfWorld1(1441);
console.log(per);


//Helperfunctions
/*
function cut(fruit) {
  return fruit * 4;
}
*--/ another comment here

const cut = (fruit) => fruit * 4

function fruitProcessor(apples, oranges) {
  const applePieces = cut(apples);
  const orangePieces = cut(oranges);

  const juice = `Juices with ${applePieces} or apples slices and ${orangePieces} oranges slices.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const perOfWorld1 = function (pop) {
  return (pop / 7900) * 100;
}

function desPop(country, pop){
	return `${country} has a population of ${pop} with a precentage of ${perOfWorld1(pop)}`
}

console.log(desPop('China',1441))


const calAge = (year) => 2037 - year;

const retirementYears = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (age >= 18) {
    if (retirement >= 0) {
      return `${firstName} retire in ${retirement} years.`;
    } else {
      return `${firstName} is ${age} years old and is old enough to retire.`;
    }
} else {
	  return `${firstName} is only ${age} years old and is not old enough to work.`;
}
};

console.log(retirementYears(1970, "Sam"));


const calAvg = (score1, score2, score3) => (score1 + score2 + score3)/3;

function check(teamA, teamB)
{
	if (teamA > teamB || teamB > teamA)
	{
		if(teamA > teamB * 2)
		{
			console.log(`Dolphins won leading with (${teamA} vs. ${teamB})`);
		}
		else if (teamB > teamA * 2)
		{
			console.log(`Koalas won leading with (${teamB} vs. ${teamA})`);
		}
		else
			console.log(`Dolphins and koalas both lost with respective points of ${teamA} vs ${teamB}`)
	}
}

let dolphin = calAvg(85, 54, 41)
let koalas = calAvg(23, 34, 27)

console.log (dolphin)
console.log (koalas)

const winner = check(dolphin,koalas)


//datastructuress
//arrays are data shelves

const friends = ["Michael", "Steven", "Peter"];

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jayzarian Ricflarian Balzarian";
console.log(friends);
//we cant mutate primitive values but we can mutate something in the aarray.
//but u can't mutate the whole array.

//friends = ["Bob", "Asheley"]

const firstName = "Jonas";
const jonas = [firstName, "Smith", 2037 - 1991, "teacher", friends];

console.log(jonas)

//exericise

const calAge = (birthYear) => 2037 - birthYear;

const years = [1990, 1967, 2002, 2010, 2018];

//how not to do it

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);
console.log(age1, age2, age3);
*/

//FAILED ATTEMPT OF LOOP ARRAY CAL

/*
const ages = [calAge(years[0]), calAge(years[1]), calAge(years[2])];
console.log(ages);

function calAges(arr) {
  let x = 0;
  let y = 0;

  while (x < 6) {
    if (arr[y] <= arr[arr.lentgh-1]) {
      console.log(calAge(x));
	  x++;
    }
	y++;
  }
}

let loop = calAges(years);
console.log(loop);
*/

