
/* readyState
0: uninitalized // 초기화
1: loading // 로딩
2: loaded // 로딩이 완료된
3:interative // 인터랙티브
4:complete // 완료
 */



const xhr = new XMLHttpRequest();
//console.log( xhr.readyState );  0

//xhrData 유틸함수 만들기 > method, url 받기 >> body도 추가 >>> options(객체)로 한번에 넘기기 
export function xhrData({
  url = '', 
  method = 'GET', 
  body = null, 
  onSuccess = null,
  onFail = null,
  headers = {'Content-Type':'application/json',
             'Access-Control-Allow-Origin': '*',}
}){

  
  //인수도 객체 구조 분해 할당..
  // const {method, url, body} = options
  //파라미터로 들어올 때 바로 객체 구조 분해 할당하는 방법도 있음.
  //function xhrData({ method, url, body})
  //이렇게 구조 분해 할당하면 좋은 점. 초기값을 할당할 수 있음.

  //비동기 통신 오픈
  xhr.open(method, url)
  //console.log( xhr.readyState );  //1
  


  //Object.entries 객체를 넣으면 key, value를 배열로 반환함
  // console.log(Object.entries(headers)); //['Content-Type', 'application/json']


  // Object.entries(headers).forEach((item)=>{
  //   console.log(item); //배열
  //   //['Content-Type', 'application/json']
  //   //['Access-Control-Allow-Origin', '*']
  // })


  //에러날수도 있으니 일단 주석처리함.
    // Object.entries(headers).forEach(([key, value]) =>{
    //   xhr.setRequestHeader(key,value);
    //   //header를 request할때 세팅해주는 것.
    // })



  //통신이 완료됐을 때, 통신이 됐을 때마다 잘됐는지 체크함.
  //readystate의 변경이 있을 때마다 이 이벤트를 호출하는것 (확실히하려고)
  xhr.addEventListener('readystatechange', ()=>{

    //객체 구조 분해 할당
    //xhr에서 원하는 값만 뽑아와서 그걸 그대로 변수처럼 사용
    const {status, readyState, response} = xhr;

    // console.log( xhr.readyState ); 
    //2, 3, 4 -> 로딩, 로딩이 완료됨, 인터랙티브. 최종적으로 4단계 complete가 완료된 걸 확인할 수 있음.
  
    if(status >= 200 && status < 400) {
      if(readyState === 4){ //4단계까지 갔을 때 통신 성공 출력
        console.log('통신 성공');

        //통신이 성공했을 때 onSuccess함수 실행함.
        onSuccess(JSON.parse(response));
        console.log();
        // console.log(response); //user데이터들이 출력됨 -> 현재 싹다 문자임.(string) (아직 객체화가 안된 상태임.)
        //이걸 JSON.parse()를 사용해서 객체화시킴.
        // console.log(JSON.parse(response)); //이 객체를 가지고 사용할 수 있음.
        //얘네를 위에 onSuccess()에 넣음
      }  
    } else {
      onFail('통신 실패')
    }  
  
  })  
  
  //서버에 요청
  xhr.send(JSON.stringify(body));
  //서버에 보낼 땐 다시 문자화

}  

//순서상관없이 넣을 수 있는 객체를 만들기.
// xhrData({
//   url: 'https://jsonplaceholder.typicode.com/users/1',
//   //성공했을때 실행할 함수
//   onSuccess: (result)=>{
//       console.log(result);
//   },
//   // onSuccess(JSON.parse(response)); 위에서 실행한 함수의 파라미터는 바로 여기 화살표 함수에 들어옴.
//   onFail : (err) => {
//     console.error(err);
//   }
// })


//메소드를 따로 적어주지 않아도, post/delete 등으로 나눠서 사용할 수 있게
//메소드처럼 만들어주기
// xhrData.post('https://jsonplaceholder.typicode.com/users/1');


//멘토링때 했던 number 어쩌고 다시 보기
//메소드를 넣어버림.
//함수지만 객체인 xhrData에게 get이란 메서드를 만들어주는 것.
xhrData.get = (url, onSuccess, onFail)=>{
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

//객체 안에 정의된 함수는 메소드.
//xhrData에 메소드를 추가하는 중.. => get, ㅐㄴㅅ
//위에서 쓴 xhrData들 안에 객체들을 똑같이 쓰는 것.
//객체이기 때문에 프로토타입에 넣어주지않고도 바로 메서드를 넣어줄 수 있는 것.

//console.dir(xhrData); //함수이지만 객체임.

//post 만들기
xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}

//delete
xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}

//put
xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'put',
    url,
    onSuccess,
    onFail
  })
}


// //xhrData의 메서드 get을 호출해서 사용
// xhrData.get(
//   'https://jsonplaceholder.typicode.com/users/1', //이 url은 실제 xhrData의 url로 들어감.
//   (res) => {
//     console.log(res); //이건 onSuccess로
//   },
//   (err) => {
//     console.log(err); //이건 onFail로
//   }
// )






//이건 무조건 순서대로 작성해야하니까 불편함.
// xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
//   "name": "kindtiger",
//   "username": "seonbeom"
// })

//통신성공과 {id: 11}이 리턴됨.





/*
우리가 get이 아니라 post할 경우,
user데이터에 새로 추가함. 근데 이 함수에는 추가할 데이터를 넣을 파라미터를 안만들었음.

json을 문자화시켜줘야 서버로 보낼 수 있음. 서버에서 돌아올때 (response)도 객체화를 시켜줘야함. 그래야 우리가 해석함.
던지는거 자체는 객체면 안되니까, 객체화시키는 과정이 필요함. JSON.stringify()를 사용하고
그 메서드의 인수로 데이터를 넣는 것.

data라는 객체가 있을때, 서버에 보내기전에 문자화 우선.
xhr.send(JSON.stringify(data));

thunder는 자동으로 문자화, 객체화가 됨.

post할 땐 새로 추가할 데이터값을 받아야함. (body라 했을때)
그러면 xhrData(method, url, body)이렇게 
*/





