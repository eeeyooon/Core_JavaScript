/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

/* console.log(resultX);
console.log(resultY);
console.log(resultZ);
*/

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  console.log(arguments);

  let total = 0;

  let arr = Array.from(arguments);
  // let arr = Array.prototype.slice.call(arguments); //array의 능력을 빌려서 array를 직접 만듦.

  //forEach() > 똑같이 반복을 돎.
  arr.forEach(function (item, index) {
    // console.log(index);
    total += item;
  });

  /*   for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  } */

  /* 
    for (let value of arguments) {
      total += value;
    }
  */

  // return total;

  return arr.reduce(function (acc, item) {
    return acc + item;
  });

  // return moneyA + moneyB + moneyC + moneyD;
};

console.log(calculateTotal(100, 200, 300, 400, 500, 600));
//인수가 많아지면 뒤에 넘는 값들은 없는값들로 취급됨.

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};
//이름을 가져도 의미가 없음 어차피 hello()로는 호출하지 못함.

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url, resolve, reject) {
  if (typeof url === "string" && url.match(/http.+www/)) {
    resolve(url);
  } else {
    reject();
  }
};

callbackFunctionExpression(
  "https://www.naver.com",
  function (url) {
    console.log(`${url} 해당 페이지로 이동합니다.`);
  },
  function () {
    throw new Error("url 입력 정보가 올바르지 않습니다.");
  }
);

// 함수 선언문 vs. 함수 (표현)식

function aa() {}

const bb = function () {};

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

let IIFE;

(function () {
  console.log("hi~");
})();

//var 함수 스코프
//let, const 블록 스코프

const MASTER = (function () {
  //parameter
  const KEY = "alacs#$@#";

  //내가 내보내고 싶은 항목들만 내보낼거야
  //모듈로서의 활용
  //정보 은닉화 incapsulation: 외부의 접근을 차단
  //일부 정보만 노출

  return {
    getKey: function () {
      return KEY;
    },
  };
})(); //arguments

console.log(MASTER.getKey());
