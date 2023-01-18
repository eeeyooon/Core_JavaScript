
import { getNode } from './../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';

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


const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}



delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = 'rotate(360deg)';
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
})



export function delayP(options = {}){

  let config = {...defaultOptions};

  //숫자만 있을 땐 timeout만 (굳이 객체합성할 필요x)
  // if(isNumber(options)){
  //   config.timeout = options;
  // }
  
  //객체 합성 mixmin > 뒤에 있는게 덮어짐. 옵션에 있는 내용이 config로
  if(isObject(options)){
    config = { ...config, ...options};
  }

  
  const {shouldReject, data, errorMessage, timeout} = config;

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);
  })
}


delayP(3000).then((res)=>{
  console.log(res);
})

delayP({
  data: '안녕'
}).then((res)=>{
  console.log(res);
})


// delayP(true); 
// console.log(delayP(false)); //성공

// console.log(delayP());

// //resolve의 결과값을 then을 통해 받아옴.
// //프라미스는 무엇을 쓰든 값을 항상 리턴함
// delayP().then((res)=>{
//   console.log(res); //성공!
// })

//delayP 함수의 리턴이 프로미스객체여서 리턴값으로 객체를 못받아서 그렇습니다 -> delayP.then은 x 실행시켜줘야함.

//프라미스객체를 계속 리턴
// delayP()
// .then(res=>console.log(res))
// .catch(err=>console.log(err))









