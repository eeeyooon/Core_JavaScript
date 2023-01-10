/* ---------------------------------------------------------------------- */
/* HTML Attributes vs. DOM Properties                                     */
/* ---------------------------------------------------------------------- */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */


let first = getNode('.first');

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
console.log( first.hasAttribute('class') ); //true

// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log( first.getAttribute('class') ); //first
console.log( first.getAttribute('class') === 'first' ); //true

// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id', 'box'); //first.id = 'box
first.setAttribute('some', 'hello'); 
//<span class="first" id="box" some="hello">hello</span>


// - elementNode.removeAttribute(name) – 속성값을 지움
first.setAttribute('some', ''); // 공백으로 제거
//<span class="first" id="box" some="">hello</span>

first.removeAttribute('some');
//<span class="first" id="box">hello</span>

// first.setAttribute('class', 'is-active');
//<span class="is-active" id="box" some="">hello</span>
//기존 클래스가 지워지고 새로 추가됨. (덮여쓰임)


// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

console.log(first.attributes); //NamedNodeMap (유사배열)
//프로토타입을 열어보면 Symbol에 iterator가 내장되어있음
//-> 열거가능한(iterable) 속성은 모두 symbol에 iterator가 있음.
// = 이 기능을 가지면 "넌 순환이 가능한 놈이야"하고 선언하는 것
// Symbol(Symbol.iterator)


for (let value of first.attributes) {
  console.log(value);
}
//class="is-actdive" id="box"


/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

first.dataset.play = 'playing' //set

console.log( first.dataset.play ); //get > playing

//유틸함수
//get 함수 만들기 

function getAttr(node, prop){
  
  if(typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

console.log(getAttr('.first', 'class')); //first

// console.log(getAttr(first, 'data-play')); //playing


//set 함수 만들기

function setAttr(node, prop, value) {

  if(typeof node === 'string') {
    node = getNode(node);
  }
  if (typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자타입이어야 합니다.')

  if (prop.includes("data")) {
    let rest = prop.slice(5);
    node.dataset[rest] = value;
  }
  

  if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.')

  node.setAttribute(prop, value);

}

setAttr('.first', 'data-value', 'hello');


//common 함수 만들기

/*
function attr(node, prop, value) {
  if(typeof node === 'string') {
    node = getNode(node);
  }

  if(!value) {
    return getAttr(node, prop);
    
  } else {

    setAttr(node,prop,value);

  }
}
*/

//위 축약 버전
const attr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);


//get일때 (value X)
console.log(attr('.first', 'class')); //first
console.log(attr('.first', 'id')); //box

//set일때 (value 존재)
attr('.first', 'id', 'container'); //id="container"




//이피패턴(). 즉시실행함수식
/*

즉시실행함수 안에서 다른 함수를 인자로 받아서 사용함  (별칭으로 사용) -> 보안성 높임.

(function(){

  let first = $('.first');

})(getNode)

*/

console.assert(getAttr('.first','class') === 'first');