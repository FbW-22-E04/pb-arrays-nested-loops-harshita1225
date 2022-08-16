//Q1. Construct the following pattern.

for (let i = 0; i < 4; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

//Q2. Given the following array:

const ARR = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (let [i, item] of ARR.entries()) {
  //
  console.log(`row ${i}`);
  for (let value of item) {
    console.log(`${value}`);
  }
}
console.log(ARR.entries());

//Q3

if ((i = 1)) {
  let str1 = "";
  for (let i = 1; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      str1 += i + " ";
    }
  }

  console.log(str1);
} else {
  let str2 = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
      str2 += j + " ";
    }
  }

  console.log(str2);
}
