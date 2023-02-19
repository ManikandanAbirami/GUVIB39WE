const walk = () => {
  console.log("He is walking!!!");
  setTimeout(() => {
    console.log("After taking rest for a while, need to drink water!!!!!");
  }, 2000);
  run();
}

const run = () => {
  console.log("He is running!!!");
  setTimeout(() => {
    console.log("Take water bottle!!!!");
  }, 1000);
  rest();
}

const rest = () => {
  console.log("He is taking rest!!!");
}

walk();