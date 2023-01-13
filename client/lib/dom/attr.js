
//IIFE패턴 > 다시 확인
//코드 이상함

// const attr = (function(){

//   function getAttr(node, prop){
  
//     if(typeof node === 'string') {
//       node = getNode(node);
//     }
  
//     return node.getAttribute(prop);
//   }

  
//   function setAttr(node, prop, value) {

//   if(typeof node === 'string') {
//     node = getNode(node);
//   }
//   if (typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자타입이어야 합니다.')

//   if (prop.includes("data")) {
//     let rest = prop.slice(5);
//     node.dataset[rest] = value;
//   }

//   const attr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);

//   //incapsulation //캡슐화
//   //정보 은닉
//   }

//   return attr
  
// })()


function getAttr(node, prop){
  
  if(typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}


function setAttr(node, prop, value) {

  if(typeof node === 'string') {
    node = getNode(node);
  }
  if (typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자타입이어야 합니다.')

  if (prop.includes("data")) {
    let rest = prop.slice(5);
    node.dataset[rest] = value;
    return;
    //value가 없는 상태에서 includes를 확인할 필요가 없기 때문에 return해줌.
    //아래 함수는 실행될 필요가 x
  }
  

  if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.')

  node.setAttribute(prop, value);

}


const attr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);