const players1 = ['Neuer', 'Pavard', 'Boateng', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Gnabry', 'Lewandowski', 'Coman'];
const players2 = ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'];

const gk = players1[0];
const fieldPlayers = players1.slice(1);

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const game = {
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5
    }
};

const { team1, draw, team2 } = game.odds;

function printGoals(...players) {
    console.log(`${players.length} goals were scored by:`);
    players.forEach(player => console.log(player));
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
