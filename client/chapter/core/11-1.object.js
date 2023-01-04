/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */

/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

//authentication = 인증
//authorization = 권한

let authUser = null;

authUser = {
  uid: "user-id-asdA12k3klf",
  name: "kindtiger",
  email: "seonbeom2@gmail.com",
  isSignIn: true,
  permission: "paid", // free | paid
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);

// console.log("-----------------------------");
// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser["uid"]);
// console.log(authUser["name"]);
// console.log(authUser["isSignIN"]);
// console.log(authUser["permission"]);

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = "phone"; // phone | tel

function createUser(computedProp = "phone") {
  return {
    name: "unknown",
    email: "unknown@company.io",
    [computedProp]: "010-7169-0262",
  };
}

const user = createUser(); //인수로 tel을 넣으면 [computedProp]자리에 tel이 들어감.
// console.log(user);

// 프로퍼티 포함 여부 확인

Object.prototype.SIGN = true;

//내가 가지고 있는 key값만 출력

for (let key in authUser) {
  // console.log(key); //이 위치에서는 우리가 추가한 SIGN까지 출력됨.

  //{}.hasOwnProperty.call로 대체할 수 있음.
  if (Object.prototype.hasOwnProperty.call(authUser, key)) {
    //console.log(key); //hasOwnProperty를 해야 객체가 "진짜" 가지고있던 key값만
  }
}

// 프로퍼티 나열

//객체 -> 배열

let keyArr = Object.keys(authUser);
let valueArr = Object.values(authUser);

// console.log(keyArr);
// console.log(valueArr);

//key값만 리턴
// function getPropertiesList(object) {
//   return Object.keys(object);
// }

//arrow function
const getPropertiesList = (object) => Object.keys(object);

let result = getPropertiesList(authUser);

// console.log(result);

// 프로퍼티 제거 or 삭제
//제거 = 값 비움, 삭제 = 값 지움.(메모리상에서 없앰)

//프로퍼티 제거
// authUser['uid']

//프로퍼티 삭제
// delete authUser['uid']

//유틸함수 만들기
/* 
1. 함수 이름 정하기
2. 인수(arguments)와 인자(parameter) 정하기
3. 확인하기(validation)
4. 리턴값 (return)
*/

function removeProperty(object, key) {
  if (!(typeof object === "object")) {
    //throw
  }

  object[key] = null;
}

removeProperty(authUser, "uid");

function deleteProperty(object, key) {
  delete object[key];
}

deleteProperty(authUser, "uid");

// console.log(authUser);

// 단축 프로퍼티
let name = "선범";
let email = "seonbeom2@euid.dev";
let authorization = "Lv. 99";
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
//객체의 키를 배열로 바꾸고 그 배열의 갯수가 0이면 true : false

function isEmptyObject(object) {
  //return Object.keys(object).length === 0 ? true : false;
  //어차피 아래코드는 값이 존재하면 true 존재하지않으면 false를 자체적으로 반환하기 때문에
  //굳이 삼항 연산자 사용 x
  return Object.keys(object).length;
}

// console.log(isEmptyObject(authUser));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430,
};

//월급의 총 합
//Object.entries

function salariesSum(salaries) {
  let total = 0;
  for (let keyValue of Object.entries(salaries)) {
    let key = keyValue[0];
    let value = keyValue[1];
    total += value;
  }

  return total;
}

// console.log(salariesSum(salaries));

// 구조 분해 할당 destruturing..파괴.. assignment...할당
// 배열의 구조 분해 할당.. 객체의 구조 분해할당이 있음...

/* -------------------------------------------------------------------------- */
/*                                 배열 구조 분해할당                                 */
/* -------------------------------------------------------------------------- */

let color = ["#ff0000", "#2b00ff", "#00ff2f"];

// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];

const [red, blue, green] = color;

// console.log(green);

/* -------------------------------------------------------------------------- */
/*                    객체 구조 분해 할당 destructuring assingments                   */
/* -------------------------------------------------------------------------- */

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 430,
// };

// const { John: a, Ann: Ann, Pete: c } = salaries;

//앞으로 a라는 변수를 사용할 수 있을거다.
//위에처럼 처리하면 객체 안에 있는 key를 변수처럼 console.error('사용가능',사용가능)

//숏핸드 프로퍼티 (key랑 value랑 같을때)
const { John, Ann, Pete } = salaries;

console.log(Ann);
