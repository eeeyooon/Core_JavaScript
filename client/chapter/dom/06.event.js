/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */
// - addEventListener
// - removeEventListener


const first = getNode('.first');
const second = getNode('.second');
const ground = getNode('.ground');
const ball = getNode('.ball');

function handeler(){
  console.log('hit !');

  //.first클릭했을때 .second없애기
  // css('.second', 'display', 'none')
}

first.addEventListener('click', handeler);


ground.addEventListener('click', function(e){
  // console.log('ground hit');

  // console.log(e); // > PointerEvent가 나옴 (이벤트 객체)
  console.log(e.offsetX, e.offsetY); //클릭하는 지점의 x,y좌표

  ball.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;

})

ground.addEventListener('mousemove', function(e){
  // console.log(e.offsetX, e.offsetY);

  let posX = e.offsetX;
  let posY = e.offsetY;

  // const emotion = /* html */ `<div class="emotion" style="left:${posX}px; top:${posY}px">🥰</div>`

  insertLast(ground, emotion);

})

function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}

// resize
// ground.addEventListener('mousemove',debounce((e)=>{
//   console.log(e.offsetX, e.offsetY);

//   let posX = e.offsetX;
//   let posY = e.offsetY;

//   const emotion = /* html */`<div class="emotion" style="left:${posX}px;top:${posY}px">😘</div>`  

//   insertLast(ground,emotion);

// },1000))



// const off = bindEvent('.first', 'click', handeler);
// bindEvent('.second', 'click', off);

// bindEvent('.first', 'click', handeler);



//second를 누르면 first의 이벤트리스너 삭제
// second.addEventListener('click', function(){
//   first.removeEventListener('click', handeler)
// })


