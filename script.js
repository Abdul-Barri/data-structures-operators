"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// Data for Coding Challenge One of Data Structures and Operators
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge 1 Solution
// Task 1
const [players1] = [game.players[0]];

console.log(players1);

const [players2] = [game.players[1]];

console.log(players2);

const [players11, players22] = game.players;

// OR ===>>

console.log(players11);
console.log(players22);

// Task 2
const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

// Task 3
const allPlayers = [...players1, ...players2];

console.log(allPlayers);

// Task 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

console.log(players1Final);

// Task 5
const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

// Task 6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

// Task 7
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 2 is more likely to win`);

// Coding Challenge 2 Solution
console.log(`Solution for Coding Challenge 2 Starts here.....>>>>>>`);

// Task 1
for (const [goal, goalScorer] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${goalScorer}`);
}

// Task 2
let average = 0;
const odds = Object.values(game.odds);

for (const odd of odds) {
  average += odd;
  average /= odds.length;
  console.log(average);
}

// Task 3
for (const odd of odds) {
  console.log(`Odd of victory `);
}

// Coding Challenge 3 Solution
console.log(`Solution for Coding Challenge 3 Starts here.....>>>>>>`);

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Task 1

const eventsArray = [...new Set(gameEvents.values())];

console.log(eventsArray);

// Task 2

gameEvents.delete(64);
console.log(gameEvents);

// Task 3

for (const [min, event] of gameEvents) {
  const time = [...gameEvents.keys()].pop();
  console.log(
    `An event happened on average, every ${time / gameEvents.size} minutes`
  );
}

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half} Half] ${min}: ${event}`);
}