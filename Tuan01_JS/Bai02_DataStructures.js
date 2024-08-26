const game = {
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5
    },
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund'
};

game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
});

const odds = Object.values(game.odds);
const averageOdd = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;
console.log(`Average odd: ${averageOdd}`);

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.draw}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

const scorers = {};
game.scored.forEach(player => {
    scorers[player] ? scorers[player]++ : scorers[player] = 1;
});

console.log(scorers);

