
import { getNode } from './../dom/getNode.js';


const first = getNode('.first');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}
//callback() 괄호가 빠지긴 했지만 setTimeout자체가 시간이 지나면 호출하는 기능을 가지고 있기때문에
//괄호가 없어도 실행된다.

//많아질수록 읽기가 어려워지고 관리가 어려워짐 => 콜백지옥
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{    
    first.style.transform = 'rotate(360deg)';
    delay(()=>{
      first.style.top = '0px';
    })
  })
})