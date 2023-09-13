

// câu 1
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];
const dolphinsAverageScore = dolphinsScores.reduce((a, b) => a + b) / dolphinsScores.length;
const koalasAverageScore = koalasScores.reduce((a, b) => a + b) / koalasScores.length;
console.log('đội Dolphins: ', dolphinsAverageScore);
console.log('đội Koalas: ', koalasAverageScore);
// câu 2

if (dolphinsAverageScore>koalasAverageScore)
{
  console.log('đội Dolphins win' , dolphinsAverageScore)
}
else
{
   console.log('đội Koalas win' , koalasAverageScore)
}
// câu 3

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log('đội Dolphins win' , dolphinsAverageScore)
} else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
    console.log('đội Koalas win' , koalasAverageScore)
} else {
  console.log ('2 đội hòa nhau')
}

// câu 4
if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {    
    console.log('đội Dolphins win' , dolphinsAverageScore);
}
else if (dolphinsAverageScore < koalasAverageScore && dolphinsAverageScore >= 100) 
{
    console.log('đội Koalas win' , koalasAverageScore);
 } 
 else if (dolphinsAverageScore == koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log('2 đội hòa nhau');
 } else 
 {
    console.log("không một đội nào thắng :");
 } 
