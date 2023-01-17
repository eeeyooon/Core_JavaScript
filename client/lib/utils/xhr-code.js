

const xhr = new XMLHttpRequest();

export function xhrData({
  url = '', 
  method = 'GET', 
  body = null, 
  onSuccess = null,
  onFail = null,
  headers = {'Content-Type':'application/json',
             'Access-Control-Allow-Origin': '*',}
}){


  //비동기 통신 오픈
  xhr.open(method, url)
  

    // Object.entries(headers).forEach(([key, value]) =>{
    //   xhr.setRequestHeader(key,value);
    //   //header를 request할때 세팅해주는 것.
    // })


  //readystate의 변경이 있을 때마다 이 이벤트를 호출하는것 (확실히하려고)
  xhr.addEventListener('readystatechange', ()=>{

    const {status, readyState, response} = xhr;

  
    if(status >= 200 && status < 400) {
      if(readyState === 4){ 
        console.log('통신 성공');

        //통신이 성공했을 때 onSuccess함수 실행함.
        onSuccess(JSON.parse(response));
        console.log();

      }  
    } else {
      onFail('통신 실패')
    }  
  
  })  
  
  //서버에 요청
  xhr.send(JSON.stringify(body));
  //서버에 보낼 땐 다시 문자화

}  


xhrData.get = (url, onSuccess, onFail)=>{
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}


xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method:'put',
    url,
    onSuccess,
    onFail
  })
}

