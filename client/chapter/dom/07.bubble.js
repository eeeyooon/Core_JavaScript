/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */


const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', function(e){
  
  let elem = e.currentTarget;

  // console.log('target : ', e.target);
  // console.log('currentTarget : ', e.currentTarget);
  // console.log(this); 
  //함수를 호출한 애가 this. 여기서는 바로 visual
  //그럼 여기서의 this는 e.currentTarget과 동일함.
  // console.log(this === e.currentTarget);
  console.log('%c visual', 'background:dodgerblue');

  css('.pop','display','block');
  // addClass('.pop', 'is-active');
})


getNode('.pop').addEventListener('click',(e)=>{
  e.stopPropagation()
  css('.pop','display','none');
})

/* 
news.addEventListener('click',function(){
    console.log('%c news','background:orange');
})
desc.addEventListener('click',function(e){
    e.stopPropagation()
    console.log('%c desc','background:hotpink');
})
 */




/* 캡처링 ----------------------------------------------------------------- */