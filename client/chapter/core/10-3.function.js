/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */

const calculateTotal = (...args) => {
  let total = 0;
  args.forEach((item) => {
    total += item;
  });

  //return args.reduce((acc, item) => acc + item);

  // console.log(total);

  return total;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
// let resultY = calculateTotal(21500, 3200, 9800, 4700);
// let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => args.reduce((acc, item) => acc + item);

console.log(calcAllMoney(1, 2, 3, 4));

// 화살표 함수와 this

function normalFunction() {
  console.log("일반함수 : ", this);
}

const arrowFunction = () => {
  console.log("화살표함수 : ", this);
};

// normalFunction(); //window
// arrowFunction(); //window

const user = {
  name: "tiger",
  age: 32,
  address: "서울시 중랑구 면목동",
  grades: [80, 90, 100],
  totalGrades: function () {
    // let total = 0;
    // this.grades.forEach((item) => {
    //   total += item;
    // });
    // return total;

    function foo() {
      console.log("foo : ", this);
    }

    const bar = () => {
      console.log("bar : ", this); //this는 user 객체
    };

    foo.call(user); //call을 붙여야 user객체로 this가 지정됨.
    // foo(); //일반 함수 일땐 this가 window임.
    // bar();
  }, //객체 안에 들어있는 함수 = 메소드
};

user.totalGrades();
// console.log(user.totalGrades()); //270

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powercount) => {
  let result = 1;
  for (let i = 0; i < powercount; i++) {
    result *= numeric;
  }
  return result;
};

let powExpression = (numeric, powCount) =>
  Array(powCount)
    .fill(null)
    .reduce((acc) => acc * numeric, 1);

//pow(2,53)

// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = "";
  for (let i = 0; i < repeatCount; i++) {
    result += text;
  }
  return result;
};

let repeatExpression = (text, repeatCount) =>
  Array(repeatCount)
    .fill(null)
    .reduce((acc) => acc + text, "");

// repeat('hello', 3)
