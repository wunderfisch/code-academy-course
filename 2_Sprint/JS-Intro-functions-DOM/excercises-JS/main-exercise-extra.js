// exercise 19
let multNum = () => {
  let mult = 3 * 5;
  console.log(mult);
};
multNum();

// ex- 20
let multCall = () => {
  let mult = 3 * 5;
  //   console.log("mult :>> ", mult);
  multCallBack(mult);
};
multCallBack = (x) => {
  console.log(" x :>> ", x);
};
multCall();

// ex 21
let mult3 = (a, b) => {
  let mult = a * b;
  return mult;
};

console.log("mult3(4, 7) :>> ", mult3(4, 7));

// ex 22
let triangle = (a, b, c) => {
  if (a === b) {
    if (b === c) {
      console.log("gleichseitiges dreieck");
    } else {
      console.log("zwei seiten gleich");
    }
  } else if (b === c || c === a) {
    console.log("zwei seiten gleich");
  } else {
    console.log("alle seiten unterschiedlich");
  }
};
triangle(3, 3, 3);
triangle(3, 3, 2);
triangle(1, 2, 3);
triangle(14, 9, 5);
