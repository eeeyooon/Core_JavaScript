

import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert } from './lib/index.js';

import { jujeobData } from "./data/data.js";

// console.log( isNumericString('123')); // > true

const submit = getNode('#submit');
const resultArea = getNode('.result');

console.log(getRandom(5));

function clickSubmitHandler(e){

  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name)
  let pick = list[getRandom(list.length-1)];

  if(!name){
    console.log('이름을 입력해주세요!');
    //showAlert 
    
    showAlert(".alert", "이름을 입력해주세요", 3000);
    //이름이 없을땐 밑 코드가 실행되지 않게
    return
  }

  //숫자만 입력했을 때 실행 x (숫자&문자는 ㅇㅋ)
  if(isNumericString(name)) {
    console.log('제대로 된 이름을 입력해주세요.');

    showAlert(".alert", "제대로된 이름을 입력해주세요", 3000);
    
    return
  }

  clearContents(resultArea)
  insertLast(resultArea, pick)

}

submit.addEventListener('click', clickSubmitHandler);