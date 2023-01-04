/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */

// 복사(copy) vs. 참조(reference)

let message = "문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.";
let messenger = {
  name: "kakao talk",
  manufacture: "kakao",
};

let text = message;
let conversationTool = messenger;

text = "안녕";

// conversationTool.name = "line";

// 비교 (복사 vs. 참조)
// console.log(message == text); //false
// console.log(message === text); //false
// console.log(messenger == conversationTool); //true
// console.log(messenger === conversationTool); //true

// 객체 복사
// 1. for ~ in 문을 사용한 복사
const cloneObject = {};

for (const key in messenger) {
  cloneObject[key] = messenger[key];
}

// 2. Object.assign()을 사용한 복사
// const copyObject = Object.assign({}, messenger);

// 3. 전개 연산자(...)를 사용한 복사
const spreadObject = { ...messenger }; //정말 편한 방법

// 4. 객체를 복사해주는 유틸 함수

const copyObject = (object) => Object.assign({}, object);

// 객체 병합(합성)
const cssMapA = {
  color: "#4b004b",
  margin: "0 auto",
};

const cssMapB = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  padding: "0.4em 0.62em",
  color: "#3f9e97",
};

//둘다 가능
// let combinedCssMap = Object.assign({}, cssMapA, cssMapB);
let combinedCssMap = { ...cssMapA, ...cssMapB };

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  "min-height": "100vh",
  "max-width": {
    sm: "90%",
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140,
  },
};

let copyedContainerStyles = { ...containerStyles };

// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === "object") {
        value = cloneDeep(value); //재귀
      }
      return [key, value];
    })
  );
}

//entries로 배열을 새로 만들어 그 배열을 map을 이용해 구조분해할당을 하고 그 value가 object라면 다시 cloneDeep을 반복(재귀)하다가 마지막에 `fromEntries`로...다시 객체로 바꾼다..! => 배열로 바꿔서 계속 일하다가 마지막에 최종 객체로 바꿔서 반환해주는다!

// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
