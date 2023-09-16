
function printForecast(arr) {
  
  
    for (let i = 0; i < arr.length; i++) {
      daysInFuture = i + 1;
      console.log(
        `... ${arr[i]}oC in ${daysInFuture} days ...`
      );
    }
  }
  
  // Test the function with both test datasets:
  printForecast([17, 21, 23]);
  printForecast([12, 5, -5, 0, 4]);
  