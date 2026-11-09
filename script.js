const titles = ["곡성", "인터스텔라", "1917", "호프", "우주전쟁"];
const ratings = [7.38, 8.49, 8.47, 7.2, 6.57];
const years = [2016, 2014, 2019, 2026, 2005];

for (let index in titles) {
  console.log(index);
}
for (let index of titles) {
  console.log(index);
}

function gugudan() {
  for (let i = 1; i <= 9; i++) {
    console.log(`3 * ${i} = ${3 * i}`);
  }
}

function gugudan2(dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}

function add(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
gugudan();
gugudan2(9);
add(1, 2);

const gugudanFunc = function gugudan() {
  console.log("표현식");
  for (let i = 1; i <= 9; i++) {
    console.log(`3 * ${i} = ${3 * i}`);
  }
};

const addFunc = function add(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

gugudanFunc(); // 함수 호출
addFunc(1, 2);

const gugudanArrow = () => {
  console.log("화살표");
  for (let i = 1; i <= 9; i++) {
    console.log(`3 * ${i} = ${3 * i}`);
  }
};

const addArrow = (num1, num2) => {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

gugudanArrow();
addArrow(1, 2);

//즉시 실행 함수 만들기
(function init() {
  console.log("나는 함수다 실행되었다");
})();
