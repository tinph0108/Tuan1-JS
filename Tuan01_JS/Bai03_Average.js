
let dolphinsScore1 = (96 + 108 + 89) / 3;
let koalasScore1 = (88 + 91 + 110) / 3;


let dolphinsScoreBonus1 = (97 + 112 + 101) / 3;
let koalasScoreBonus1 = (109 + 95 + 123) / 3;


let dolphinsScoreBonus2 = (97 + 112 + 101) / 3;
let koalasScoreBonus2 = (109 + 95 + 106) / 3;


function determineWinner(dolphinsScore, koalasScore) {
    console.log(`Dolphins' average score: ${dolphinsScore.toFixed(1)}`);
    console.log(`Koalas' average score: ${koalasScore.toFixed(1)}`);

    if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
        console.log(`Dolphins win the trophy with an average score of ${dolphinsScore.toFixed(1)}!\n`);
    } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
        console.log(`Koalas win the trophy with an average score of ${koalasScore.toFixed(1)}!\n`);
    } else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
        console.log(`It's a draw with both teams scoring ${dolphinsScore.toFixed(1)}!\n`);
    } else {
        console.log('No team wins the trophy.\n');
    }
}
console.log('Test Data 1:');
determineWinner(dolphinsScore1, koalasScore1);

console.log('Test Data Bonus 1:');
determineWinner(dolphinsScoreBonus1, koalasScoreBonus1);

console.log('Test Data Bonus 2:');
determineWinner(dolphinsScoreBonus2, koalasScoreBonus2);
