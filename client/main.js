

import { diceAnimation, getNode, getNodes, disableElement, enableElement, visibleElement, invisibleElement, insertLast, attr, clearContents, memo } from "./lib/index.js";



// [ 주사위 굴리기 ]
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸 함수 만들기 
// 3. handleRollingDice 함수 만들고 토글로 애니메이션 제어하기 
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기 

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기 


  //배열의 구조 분해 할당
  const [rollingDiceButton, recordButton, resetButton] = getNodes('.buttonGroup > button');

  // const button = getNodes('.buttonGroup > button');
  //nodeList는 유사배열
  // const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
  // const recordButton = getNode('.buttonGroup > button:nth-child(2)');
  // const resetButton = getNode('.buttonGroup > button:nth-child(3)');


  const recordListWrapper = getNode('.recordListWrapper')

  //tbody라는 별칭 정함.
  memo('@tbody', ()=>getNode('.recordListWrapper tbody'));
  
  //이 함수가 호출될 때 tr이 추가되게
  //주사위 돌리
  
  
  let count = 0;
  let total = 0;
  
  function renderRecordListItem() {

    let diceValue = Number(attr('#cube', 'data-dice'));


    
    let template = /*html */`
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>
      <td>${total += diceValue}</td>
    </tr>
    `;
    insertLast(memo('@tbody'), template)
    //스크롤이 자동으로 내려가게
    recordListWrapper.scrollTop =  recordListWrapper.scrollHeight;

  }



/* -------------------------------------------------------------------------- */
/*                                    event                                   */
/* -------------------------------------------------------------------------- */


  //IIFE

  const handleRollingDice = (() => {
    
    let isRolling = false;
    let stopAnimation;
    
    return () => {

      if (!isRolling) {
        stopAnimation = setInterval(diceAnimation, 200)
        disableElement(recordButton);
        disableElement(resetButton);
        
      } else {
        clearInterval(stopAnimation);
        enableElement(recordButton);
        enableElement(resetButton);
      }

      isRolling = !isRolling;
    } 

  })()


  const handleRecord = () => {
    visibleElement(recordListWrapper)

    renderRecordListItem()
  }

  const handleReset = () => {

    count=0;
    total=0;

    invisibleElement(recordListWrapper)

    clearContents(memo('@tbody'))
  }




  rollingDiceButton.addEventListener('click', handleRollingDice)
  recordButton.addEventListener('click', handleRecord)
  resetButton.addEventListener('click', handleReset)




  // let id = setInterval(() => {
  //   console.log('안녕');

  // }, 1000);

  // clearInterval(id)
  //또는 clearTimeout(id)



  //else절 안에 있는 구문은 위에 있는 if문에 접근할 수 없음.
  //그래서 stopAnimation은 if문 밖에서 선언해줌.
  //어디서든 사용할 수 있게

//이전 함수코드 
/*

  const handlerRollingDice = () => {
  let isRolling = false;
  let stopAnimation;
  
  return () => {

    if (!isRolling) {
      stopAnimation = setInterval(diceAnimation, 100)
    } else {
      clearInterval(stopAnimation)
    }

    isRolling = !isRolling;
  } 
*/
// rollingDiceButton.addEventListener('click', handlerRollingDice)
// 이렇게하면 이벤트 발생 시 함수 자체를 반환해줌.
// rollingDiceButton.addEventListener('click', handlerRollingDice()) 
// 그래서 이렇게 실행

// => 이거 대신 IIFE패턴 사용함.
