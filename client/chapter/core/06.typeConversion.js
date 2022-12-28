/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

//String()
// number
const YEAR = 2022;

console.log(String(YEAR));

// undefined -> 'undefined'
//null -> 'null'

let days = null;
console.log(String(days));

// boolean -> true or false
let isKind = true;
// console.log(String(isKind));
console.log(isKind + "");
//이것도 문자열

/* 데이터 → 숫자 ----------------------------------------------------------- */

//Number()
// undeinfed
console.log(Number(undefined));
//NaN

// null -> 0
let money = null;
console.log(Number(money));
//0

// boolean -> true : 1 / false : 0
let cutie = false;
console.log(cutie);
//0

// string - 숫자형 문자
let num = "123";
console.log(num * 1);
//123 (*1, /1, +num)

// numeric string
let width = "320px";
console.log(parseInt(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(123));
//true

console.log(!!null);
//false

console.log(!!" ");
//true

console.log(!!"");
//false
