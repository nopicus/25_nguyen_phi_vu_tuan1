const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

// Tính chỉ số BMI của Mark và John
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

// Tạo biến Boolean 'markHigherBMI'
var markHigherBMI;


  if (markBMI > johnBMI) {
    console.log(`Mark có chỉ số  ${markBMI} cao hơn John ${johnBMI}!`)
} else {
    console.log(`John có chỉ số BMI ${johnBMI} cao hơn Mark ${markBMI}!`)
}
