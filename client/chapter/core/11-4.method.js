/* ---------------------------------------------------------------------- */
/* Object Methods and This                                                */
/* ---------------------------------------------------------------------- */

let ladder = {
  step: 0,
  up() {
    this.step++; //ladder
    return this;
  },
  down() {
    this.step--; //ladder
    return this;
  },
  showStep() {
    // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    console.log(this.step); //ladder
    return this;
  },
};

//ladder.up().up().down().showStep(); 가 실행되도록.
//ladder.up()이 this(=ladder)를 반환하면
//ladder.up().down().showStep();
//또 this(=ladder)를 반환하면
//ladder.down().showStep();
// 반복 => 즉 각각 메서드가 this(=ladder)를 리턴하면 됨.

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
  date: "2022. 7. 6",
  tableIndex: 5,
  menu: [
    //배열
    { name: "통 새우 돈까스", price: 13000, count: 2 },
    { name: "치즈 돈까스", price: 10000, count: 1 },
  ],
  totalPrice() {
    // console.log(this.menu[0].price * this.menu[0].count); //this는 shopOrder

    //acc에 더해지는 건 +=와 같음.
    return this.menu.reduce((acc, cur) => acc + cur.price * cur.count, 0);
  },
};

// shopOrder.totalPrice(); //totalPrice()의 this는 shopOrder

// console.log(shopOrder.totalPrice());

// 메서드와 this
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만,
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.

// 메서드 단축 구문

// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: "글로벌 내비게이션",
  items: [
    { id: "link-g", text: "Google", link: "https://google.com" },
    { id: "link-n", text: "Naver", link: "https://naver.com" },
  ],
  getItem(index) {
    return this.items[index];
  },
  // addItem: (newItem) => {
  //   this.items.push(newItem); //화살표 함수라 this를 못찾음
  // },
  addItem(newItem) {
    this.items.push(newItem);
  },
};

navigationMenu.addItem({
  id: "link-y",
  text: "Yahoo",
  link: "https://yahoo.co.kr",
});
console.log(navigationMenu.getItem(2));
// console.log(navigationMenu.addItem(0));
