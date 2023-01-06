/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */


/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest


// let span = document.querySelectorAll('span');

// let first = span[0];
// let second = span[1];

//위를 아래처럼 단축표기가능
let [first, second] = document.querySelectorAll('span');


// console.log(second);

// for(let keyValue of Object.entries(Object)){
//   let key = keyValue[0];
//   let value = keyValue[1];
// }


// console.log(second);s

//코드 client > lib > dom > getNode.js로 옮김


//html에 getNode.js 추가해주면 여기서 사용가능
//빨간 줄이 뜨긴하는데 실행은 잘됨.
console.log(getNode('.first'));

//-> 이게 바로 유틸함수!
// 이제 모든 유틸함수는 lib/dom에 저장될 것



/* 문서 대상 확인 */
// - matches


console.log(getNode('.first').matches('.first')); //true

//matches = 선택자 안에 class || id를 가지고 있는 대상이 있어?
//이 span안에 class '.first'가 있어?


// - contains
console.log(getNode('h1').contains(getNode('.first')));//true
//선택자의 자식들 중에 해당 element가 있어?
//이 부모안에 (h1태그) class '.first'가 있어?














