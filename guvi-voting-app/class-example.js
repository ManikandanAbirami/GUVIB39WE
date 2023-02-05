// function addition(a, b) {
//   return a + b;
// }

// console.log(addition(1, 12));

class Vehicle {
  constructor(name) {
    console.log("Displaying vehicle name: " + name);
  }
  addition(a, b) {
    console.log("Addition method called!!!");
    return a + b;
  }
}

let obj = new Vehicle("RE");
console.log(obj.addition(12, 13));