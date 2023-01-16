
//dom을 다루긴 하지만 클립보드 자체가 브라우저가 하는거니까 그냥 브라우저에 생성함.

export function copy(text) {
  return navigator.clipboard.writeText(text)
  //반환값은 "Promise". 클립보드가 제대로 이루어지면 Promise를 반환함
}