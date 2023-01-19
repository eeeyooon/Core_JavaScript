
const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-reffere',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}


export const tiger = async (options = {}) => {

  //...restOptions > rest parameter. url만 빼고 나머지를 다 받음.
  // url만 따로 받은 이유? > fetch가 현재 그러고 있음. (url만 빼고 나머지를 받는 중)
  const {url, ...restOptions} = {...defaultOptions, ...options, headers: {...(defaultOptions.headers ?? {}), ...(options.headers ?? {})}
  }



  let response = await fetch(url, restOptions)

  // response.then((res)=>{
    // console.log(res); 
    //Response{type: 'cors', url: 'https://jsonplaceholder.typicode.com/users/1', redirected: false, status: 200, ok: true,…}
  // })

  //fetch에서는 response안에 있는 ok를 가지고 와서 체크할 수 있음. (전송이 성공했ㄴ느지 , 안했는지)
  if(response.ok){
    response.data = await response.json()
    //response.json()이 parse()를 알아서 해줌...?
  }
  //fetch의 용도: 비동기 통신을 위해 사용함. xhr보다 편리함.

  console.log(response.data);
  return response;

}

//이전 코드
// tiger() //처음에 resopone만 찍어봤을 때 Promise{<pending>}
//async, await 이후 response 
// > Response{type: 'cors', url: 'https://jsonplaceholder.typicode.com/users/1', redirected: false, status: 200, ok: true,…}

//fetch에서 나온 promise의 result 값을 await이 가져옴

//response.data가 아닌 respone(fetch만 된 애, 즉 프라미스)를 리턴했기 때문에
//await 붙여줘야 함.
// console.log( await tiger() );


tiger.get = (url)=>{
  tiger({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tiger.post = (url,body,options) => {

}

tiger.post('www.naver.com', {name: 'tiger'}, {mode:'cors',headers:{}});