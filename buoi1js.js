
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// Tính chỉ số BMI của Mark và John
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

// Tạo biến Boolean 'markHigherBMI'
var markHigherBMI;

// So sánh chỉ số BMI của Mark và John
if (markBMI > johnBMI) {
  markHigherBMI = true;
  console.log('Mark có chỉ số BMI cao hơn John:')
} else {
  markHigherBMI = false;
  console.log('John có chỉ số BMI cao hơn Mask:')
}

// lấy dữ liệu từ html
//  document.querySelector("#markMass").value;
//  document.querySelector("#markHeight").value;
//  document.querySelector("#johnMass").value;
//  document.querySelector("#johnHeight").value;


// // const markMassValue = markMass.value;
// // const markHeightValue = markHeight.value;
// // const johnMassValue = johnMass.value;
// // const johnHeightValue = johnHeight.value;
//  // lưu dư liêu
// localStorage.setItem("markMass", markMass);
// localStorage.setItem("markHeight", markHeight);
// localStorage.setItem("johnMass", johnMass);
// localStorage.setItem("johnHeight", johnHeight);
console.log(markHigherBMI)

