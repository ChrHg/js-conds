// Assignment JS.Conds.0

"use strict";

// Tally of die outcomes
let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;

// Number of die rolls
let rolls = Number(window.prompt("How many times do you want to roll the die?")); 

// Rolling the die n times
for (let i = 0; i < rolls; i++) {
	let dieRoll = Math.random();
	dieRoll = Math.floor(dieRoll * 6 + 1);
	
	// Keeping tally of die outcomes
	if (dieRoll === 1)
		ones++;
	else if (dieRoll === 2)
		twos++;
	else if (dieRoll === 3)
		threes++;
	else if (dieRoll === 4)
		fours++;
	else if (dieRoll === 5)
		fives++;
	else
		sixes++;	
}

//Showing the results on the console
console.log("Rolling the die " + rolls + " time(s) gave you");
console.log("Ones: " + ones);
console.log("Twos: " + twos);
console.log("Threes: " + threes);
console.log("Fours: " + fours);
console.log("Fives: " + fives);
console.log("Sixes: " + sixes);