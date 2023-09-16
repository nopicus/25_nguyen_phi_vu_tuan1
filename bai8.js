const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
function calcTip(bill) {
    // Check if the bill value is between 50 and 300
    if (bill >= 50 && bill <= 300) {
      // Tip is 15%
      return bill * 0.15;
    } else {
      // Tip is 20%
      return bill * 0.2;
    }
 }
  for (const bill of bills) {
    // Calculate the tip
    const tip = calcTip(bill);
  
    // Add the tip to the tips array
    tips.push(tip);
  
    // Calculate the total
    const total = bill + tip;
  
    // Add the total to the totals array
    totals.push(total);
  }
  
  // Bonus: Calculate the average of the totals
  function calcAverage(arr) {
    let sum = 0;
    for (const value of arr) {
      sum += value;
    }
    return sum / arr.length;
  }
  
  // Calculate the average of the totals array
  const averageTotal = calcAverage(totals);
  
  // Print the results
  console.log(`Tips: ${tips}`);
  console.log(`Totals: ${totals}`);
  console.log(`Average total: ${averageTotal}`);
