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

class TwoWheeler extends Vehicle {
  constructor(name) {
    super("RE");
    console.log("Displaying Two wheeler name: " + name);
  }
}

// let obj = new Vehicle("RE");
// console.log(obj.addition(12, 13));

let obj2wheeler = new TwoWheeler("Yamaha");
console.log(obj2wheeler.addition(10, 10));
