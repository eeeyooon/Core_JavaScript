/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

// let age = 17;
// if (age >= 14 && age <= 90) {
//   console.log("나이가 14세 이상 90세 이하에 속합니다.");
// } else {
//   console.log("나이가 14세 이상 90세 이하에 속하지 않습니다.");
// }

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsTruth: true };

let userName = prompt("이름을 입력해주세요.", "");

if (userName === "admin") {
  let pw = prompt("비밀번호를 입력해주세요.", "");

  if (pw === "TheMaster") {
    alert("Welcome!");
  } else if (pw === "" || pw == null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
