

function calcAverage(a, b, c) {
  return (a + b + c) /  calcAverage.length;;
}
//2 
var avgDolphins = calcAverage(44, 23, 71);
var avgKoalas = calcAverage(65, 54, 49);

console.log("Dolphins: " , avgDolphins );
console.log("Koalas: " , avgKoalas );
//3
function checkWinner(avgDolphins, avgKoalas) {  
  if (avgDolphins >= 2 * avgKoalas) {
    console.log("Dolphins win ( '${avgKoalas}'  +  vs ' ${avgDolhins}')");
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log("Koalas win (" + avgKoalas + " vs. " + avgDolphins + ")");
  } else {
    console.log("No team wins...");
  }
}
//4
checkWinner(avgDolphins, avgKoalas);
//5
checkWinner(576, 111);
checkWinner(111, 576);