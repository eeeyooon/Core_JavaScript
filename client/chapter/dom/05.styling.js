/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */


const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// first.classList.add('hello');
// first.classList.remove('hello');


function addClass(node, className) {

  if(typeof node === 'string') {
    node = getNode(node);
  }

  if(typeof className !== 'string') {
    typeError('addClass 함수의 두번째 인자는 문자 타입이어야 합니다.')
  }

  node.classList.add(className)
}



function removeClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  
  if(!className) {
    node.className = ''
    return;
  }
  
  if(typeof className !== 'string') {
    typeError('removeClass 함수의 두번째 인자는 문자 타입이어야 합니다.')
  }
  
  node.classList.remove(className);
  
}


function toggleClass(node, className) {
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string') {
    typeError('toggleClass 함수의 두번재 인자는 문자 타입이어야 합니다.')
  }

  node.classList.toggle(className);
}




addClass('.first', 'hello') //<span class=first hello></span>
removeClass('.first', 'aaa');




/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


first.style.marginLeft = '30px'

first.style.transform = 'rotate(360deg)'

// first.style.backgroundColor= "red"



/* 계산된 스타일 읽기 ------------------------------------------------------- */

let size = getComputedStyle(first).fontSize;
console.log(size); //32px


//대상에게 속성을 받아서 이 속성 값이 뭔지를 보여줘야 함.
function getCss(node,prop) {
  if(typeof node === 'string') {
    node = getNode(node);
  }

  if(!(prop in document.body.style)) {
    syntaxError('getCss함수의 두번재 인자인 prop은 유효한 css 속성이 아닙니다.')
  }

  //이 결과물을 다시 돌려줌.
  return getComputedStyle(node)[prop]

}


let result = getCss('.first', 'font-size');
//그 결과를 다시 담을 수 있음.

console.log(getCss('.first', 'font-size'));


//대상에게 원하는 css 속성을 추가 = set
function setCss(node,prop,value) {
  
  if(typeof node === 'string') {
    node = getNode(node);
  }

  if(!(prop in document.body.style)) {
    syntaxError('setCss함수의 두번재 인자인 prop은 유효한 css 속성이 아닙니다.')
  }
  if(!value) {
    syntaxError('setCss 함수의 세번째 인자는 필수 값입니다.')
  }

  node.style[prop] = value;

}


setCss('.first', 'color', 'red') //red


// function css(node, prop, value) {
//   return !value ? getCss(node,prop) : setCss(node,prop,value)
// }

const css = (node, prop, value) => !value ? getCss(node,prop) : setCss(node,prop,value)


css('.first', 'font-size', '100px'); //32px

// css('.first', 'font-size', '100px');


// - getComputedStyle(element, [pseudoElement]) `읽기 전용`