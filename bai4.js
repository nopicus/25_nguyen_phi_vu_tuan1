const bill = 275;

// Calculate the tip
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Print the bill value, the tip, and the final value
const total = bill + tip;
console.log(`Hóa đơn là : ${bill}, tiền cần tip: ${tip}, tổng bill cần trả: ${total}`);

bill2 = 40;
tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
const total2 = bill2 + tip2;
console.log(`Hóa đơn là : ${bill2}, tiền cần tip: ${tip2}, tổng bill cần trả: ${total2}`);

bill3 = 430; 
tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;
const total3 = bill3 + tip3;
console.log(`Hóa đơn là : ${bill3}, tiền cần tip: ${tip3}, tổng bill cần trả: ${total3}`);
