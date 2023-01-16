

import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert, copy, addClass, removeClass } from './lib/index.js';

import { jujeobData } from "./data/data.js";
// import { addClass, removeClass } from './lib/dom/css.js';

// console.log( isNumericString('123')); // > true

const submit = getNode('#submit');
const resultArea = getNode('.result');

function clickSubmitHandler(e){

  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name)
  let pick = list[getRandom(list.length-1)];

  if(!name){
    console.log('이름을 입력해주세요!');
    showAlert(".alert-error", "이름을 입력해주세요!", 2000);

    //GSAP을 이용해서 만들어보기
    //GSAP
    //fromTo 메서드엔 첫번째로 target이 들어옴, 두번째는 duration(몇초동안 할건지), 세번째 네번째는 vars object (앞이 from, 뒤가 to)
    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat: 20})

    // addClass(resultArea, 'shake');
    // setTimeout(() => {
    //   removeClass(resultArea, 'shake');
    // }, 1000);

    return;
  }



  //숫자만 입력했을 때 실행 x (숫자&문자는 ㅇㅋ)
  if(isNumericString(name)) {
    console.log('제대로 된 이름을 입력해주세요.');
    showAlert(".alert-error", "정확한 이름을 입력해주세요", 2000);
    return
  }

  clearContents(resultArea)
  insertLast(resultArea, pick)

}

function clickCopyHandler() {
  let text = resultArea.textContent;
  // navigator.clipboard.writeText(text)

  //클립보드에 복사가 완료됐다는 alert 띄워주기
  copy(text).then(()=> {
    showAlert('.alert-success', '클립보드 복사가 완료됐습니다.', 2000)
  }) 
  //copy함수가 성공하면 약속 구문이 반환됨.
  //클립보드가 완벽하게 이루어지면 알려주기로 약속된 게 "Promise"
  //promise가 나오면 그 뒤에 then을 쓸 수 있음.
  //copy가 성공적으로 되면, promise를 리턴해줄게, 그 다음에 showAlert()를 실행시켜줄게.


  //그냥 showAlert만 쓰면
  //클립보드에 복사가 안돼도 alert의 띄워짐. (위에서아래로 실행되니까)
  //그래서 확실히 promise가 반환될때 실행하도록 처리

}

submit.addEventListener('click', clickSubmitHandler);
resultArea.addEventListener('click', clickCopyHandler);