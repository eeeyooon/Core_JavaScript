/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = "yes";

// 영화 볼거니?
let goingToWatchMovie = "no";

if (didWatchMovie === "yes") {
  // if 문(statement)
  console.log("재밌더라");
} else if (goingToWatchMovie === "yes") {
  // else if 복수 조건 처리
  console.log("재밌겠다");
} else {
  // else 절(caluse)
  console.log("음.. 난 별로");
}

let movieMessage = didWatchMovie.includes("yes")
  ? "그거 재밌더라"
  : goingToWatchMovie === "yes"
  ? "너무 설렌다"
  : "난 별로";

// 조건부 연산자

// 멀티 조건부 연산자 식 - 삼항 연산자
