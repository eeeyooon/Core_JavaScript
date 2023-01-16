



export const memo = (() => {
  const cache = {}

  return (key, callback) => {

    if(!callback) return cache[key];
  
    if(cache[key]){ //cache값이 있으면
      console.warn(`${key}값은 이미 캐시된 값이 존재합니다.`);
      return;
    }
  
    cache[key] = callback();
  
    // console.log(cache);
  }
})()


//클로저 만들기전
//set (인수가 2개)
// memo('cube', ()=> document.querySelector('#cube'));
// memo('cube', ()=> '이것은 큐브')

//get (인수가 1개)
// console.log(memo('cube'));
//undefiend (콜백이 등록x라서)
//값을 get하려면? > 콜백이 없을 때 cache의 key값을 리턴하도록 처리


//클로저 만든 이후 get하는방법
//memo만 할땐 클로저 전체가 호출되니까 두번 호출해야 함. memo()의 리턴값이 함수임. memo()()를 해야 리턴값의 함수가 실행됨.
//근데 매개변수를 memo()에 넣은게 아니라 그 안에 넣은거니까
//memo()(이자리에 매개변수)

// memo()('cube', ()=> document.querySelector('#cube'))

// memo('name', ()=>'tiger')
// memo('name')