 // Function to calculate tip
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
  
  // Test the function
  const billValue = 100;
  const tip = calcTip(billValue);
  console.log(`số tiền Tip của bill ${billValue} là ${tip}`);
  
  // Create an array of bills
  const bills = [125, 555, 44];
  
  // Create an array of tips
  const tips = [];
  for (const bill of bills) {
    tips.push(calcTip(bill));
  }
  
  // Bonus: Create an array of totals
  const totals = [];
  for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i]);
  }
  
  // Print the results
  console.log(`Tips: ${tips}`);
  console.log(`Totals: ${totals}`);
