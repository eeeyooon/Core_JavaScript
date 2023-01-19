
import { getNode } from './../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';
import { typeError } from '../error/typeError.js';

const first = getNode('.first');

// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }
// //callback() 괄호가 빠지긴 했지만 setTimeout자체가 시간이 지나면 호출하는 기능을 가지고 있기때문에
// //괄호가 없어도 실행된다.

// //많아질수록 읽기가 어려워지고 관리가 어려워짐 => 콜백지옥
// delay(()=>{
//   first.style.top = '-100px';
//   delay(()=>{    
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       first.style.top = '0px';
//     })
//   })
// })


const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}



// delayP()
// .then(()=>{
//   first.style.top = '-100px';
//   return delayP()
// })
// .then(()=>{
//   first.style.transform = 'rotate(360deg)';
//   return delayP()
// })
// .then(()=>{
//   first.style.top = '0px';
// })



export function delayP(options = {}){

  let config = {...defaultOptions};

  //숫자만 있을 땐 timeout만 (굳이 객체합성할 필요x)
  if(isNumber(options)){
    config.timeout = options;
  }
  
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


// delayP(3000).then((res)=>{
//   console.log(res);
// })

// delayP({
//   data: '안녕'
// }).then((res)=>{
//   console.log(res);
// })


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



//promise API

const defOptions = {
  url:'',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: null,
}

export function xhrPromise(options = {}){

  const xhr = new XMLHttpRequest();

  //객체합성, 구조분해할당 (assign이랑 spread operator랑 같은 역할)
  const {method, url, body, headers} = Object.assign({}, defOptions, options);
  //빈객체를 꼭 넣어야함. 거기에 덮어씌우는거기때문에 (없으면 defOptions가 변경됨.)

  if(!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.');

  xhr.open(method, url);

  xhr.send(body)

  return new Promise((resolve, reject) => {

    xhr.addEventListener('readystatechange', ()=>{

      const { status, readyState, response} = xhr;

      if(status >= 200 && status < 400){
        if(readyState === 4){
          resolve(JSON.parse(response));
          //밑에 then이 받아서 사용함.
        }
      }else{
        reject('에러입니다.');
      }
    })
  })


}

// xhrPromise({
//   url:'https://jsonplaceholder.typicode.com/users/1'
// })
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })



xhrPromise.get = (url) => {
  return xhrPromise({
    url
  })
}

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST'
  })
}

xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT'
  })
}

xhrPromise.delete = (url, body) => {
  return xhrPromise({
    url,
    method: 'DELETE'
  })
}


// xhrPromise
// .get('https://jsonplaceholder.typicode.com/users/1')
// .then((res)=>{ 
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })





//async await
//async : 일반함수를 promise를 반환하는 함수로 만든다.
//→ 대부분 async를 사용함. 대신 이걸 쓰려면 promise를 이해해야 함.

//await : 1) promise가 반환하는 result를 가져오기. 2) 코드 실행 흐름 제어.

//일반함수를 만들고 그 함수에 리턴값을 줌. 우리가 그 함수를 실행했을 때 그 결과가 result에 담김. (여기선 '완료'를 반환함.)
//async를 함수 앞에 붙여서 다시 실행시키면 > Promise(<fulfilled>:'완료')를 반환함.
//따로 Promise 값을 리턴해주지않아도 `async`만 붙이면 Promise를 반환해준다. > 어이구 편리해
//일반 함수인데, promise를 반환하시키고 싶어, 그러면 new Promise((resolve, reject)=>{}) 이런 처리를 해줬어야 했는데
//그거 안하고 async만 붙여도됨. >> 아이구야 편리하다

async function delayA(){
  return '완료'
}

//let result = delayA(); //Promise{<fulfilled>: '완료'}
let result = await delayA(); //완료

// console.log(result);


// async function 라면끓이기(){
  
//   try {
//   await delayP(1500)
//   console.log('물넣기');

//   await delayP(1500)
//   console.log('스프넣기');

//   await delayP(1500)
//   console.log('면넣기');

//   await delayP(1500)
//   console.log('계란넣기');

//   throw new Error('계란 껍질이 들어가버렸다');

//   await delayP(1500)
//   console.log('그릇에담기');

//   } catch(err){
//     console.log(err);
//   }
// }

// 라면끓이기()

//await은 코드 흐름을 제어함.
//없을 땐 동시에 코드가 출력됨.
//await을 사용하니 1.5초마다 하나씩 출력됨.
//원래는 이걸 하려면 콜백 지옥에 넣어야 했음.



//Fetch API란

//axios처럼 만들어볼 것.