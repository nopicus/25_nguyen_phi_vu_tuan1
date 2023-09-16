// Object to represent a person
class Person {
    constructor(name, mass, height) {
      this.name = name;
      this.mass = mass;
      this.height = height;
      this.bmi = null;
    }
  
    // Calculate the BMI
    calcBMI() {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
    }
  }
  
  // Create two people
  const mark = new Person("Mark Miller", 78, 1.69);
  const john = new Person("John Smith", 92, 1.95);
  
  // Calculate the BMI of each person
  mark.calcBMI();
  john.calcBMI();
  
  // Compare the BMIs and log the results
  if (mark.bmi > john.bmi) 
{
    console.log(`chỉ số BMI của Mark (${mark.bmi}) cao hơn chỉ số BMI của  John (${john.bmi})!`);
}
   else 
{
    console.log(`chỉ số BMI của  John (${john.bmi}) cao hơn  chỉ số BMI của Mark (${mark.bmi})!`);
 }
  