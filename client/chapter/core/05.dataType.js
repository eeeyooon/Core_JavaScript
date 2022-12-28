/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);
//object -> 언어 자체의 오류

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);
//undefined

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello";
let nickname = "tiger";
let message3 = `안녕 내 이름은 ${nickname}이야`;

console.log(message3);
//안녕 내 이름은 yoon이야

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;

console.log("number : ", typeof number);
//number : number

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(129123n + 123n);
//129246n
console.log(typeof 12914n);
//bigint

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);
//boolean

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});
//object

// 8. 고유한 식별자(unique identifier)
console.log(Symbol("uid"));
//Symbol(uid)

console.log(typeof Symbol("uid"));
//symbol

console.log(typeof Math);
//object

const fuc = function () {};

console.log(typeof fuc);
//function

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object - key와 value의 집합
//const user = new Object();
const user = {
  //name과 age는 프로퍼티임.
  name: "tiger",
  age: 32,
  fish: function () {
    return "뻐끔뻐끔";
  },
};

console.log(user);

// Array
// let list = new Array();
// collection
let list = [10, 100, 1000, 1, 2, 3];
console.log(list.sort((a, b) => a - b));

// function
// a, b -> 인자(argument)
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 30));

// this
