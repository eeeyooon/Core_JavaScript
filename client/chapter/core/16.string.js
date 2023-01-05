/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';

//유사배열이기때문에 for..of 돌릴 수 있고 length도 가지고 있음.
// for (let key of message) {
//   console.log(key);
// }

// length 프로퍼티
let stringTotalLength = message.length;

console.log('stringTotalLength: ', stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log('extractCharacter: ', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// message = 'more' + message[5];
// //message[3] = 'i'

// console.log(message); //morei


// 부분 문자열 추출
let slice = message.slice();
console.log('slice: ', slice);
//slice()에 아무런 인자도 넣지 않으면 다 출력됨.

slice = message.slice(0, 3);
console.log('slice: ', slice); //les (0부터 3번째 전까지만 나가)

slice = message.slice(8, -1); 
console.log('slice: ', slice); //more 뒤에서부터(-1부터. 그래서 "."은 포함x) 8번째자리까지만 출력

slice = message.slice(8);
console.log('slice: ', slice); //more. 8번부터 끝까지

let subString = message.substring(0, 3);
console.log('substring: ', subString); //"Les" (0부터 3번째전까지)

subString = message.substring(-1, 5);
console.log('substring: ', subString); //"Less " (0부터 5번째전까지)..




// let subStr;

// 문자열 포함 여부 확인
let indexOf = message.indexOf('i');
console.log('indexOf : ', indexOf); //5

let lastIndexOf = message.toLowerCase().lastIndexOf('i');

let includes = message.toLowerCase().includes('less');
console.log('includes : ',includes)

let startsWith = message.startsWith();
console.log('startsWith : ',startsWith)

let endsWith = message.endsWith('.');
console.log('endsWith : ',endsWith)


// 공백 잘라내기
let trimLeft = message.trimLeft();
console.log('trimLeft : ',trimLeft)

let trimRight = message.trimRight();
console.log('trimRight : ',trimRight)

let trim = message.replace(/\s*/g,'');
console.log('trim : ',trim)


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ',repeat)


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ',toLowerCase)

let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ',toUpperCase)


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}


toCamelCase('less-is-more') // lessIsMore
toPascalCase('less-is-more') // LessIsMore


//텍스트 잘라내기(또는 생략) 유틸리티 함수
function truncate(text, limit = 100, ellipsis = '...') {
  return `${text.slice(0, limit).trim()}${ellipsis}`;
}