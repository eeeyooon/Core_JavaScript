/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10, 100, 1000, 10000]

// console.log(typeof arr); 
// console.log(Array.isArray([])); //true


function isArray(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}

function isNull(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}

// console.log(Array.isArray([])); //true


/* 요소 순환 -------------------------------------------------------------- */

// forEach

//첫번째가 아이템자체고 두번째가 인덱스고 세번째가 배열본인
const user = {}
arr.forEach(function(item, index) {
  this[index] = item
}, user) 
//{0: 10, 1: 100, 2: 1000, 3: 10000}
/*
저게 arr를 돌면서 arr안에 있는걸 빈 객체인 user에 하나씩 넣어주는거다
그래서 user 써주는거야 this바인딩해주려고
*/

const span = document.querySelectorAll('span');

span.forEach((item)=>{

  item.addEventListener('click', function(){
    console.log(this);

  })
})


/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice

//  시작 제거 [추가]
arr.splice(1,0,23,5) //[10, 100, 1000, 10000, 23, 5]
// sort
arr.sort();

arr.sort((a,b) => {
  return a-b
})

console.log(arr);
/* 새로운 배열 반환 --------------------------------------------------------- */

//코드확인



// concat
// slice
// map

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */

// find
// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join