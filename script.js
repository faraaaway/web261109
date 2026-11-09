// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 장성민 (2351044)

//document.write("외부 스크립트 방법");

// console.log("여기 부분은 웹페이지가 아니라 콘솔에 출력이 됩니다. \n");

// let dan = 3;
// console.log("구구단 3단 ");

// for (let i = 1; i < 9; i++) {
//   console.log(`${dan} x ${i} = ${dan * i}`);
// }

// if (dan === 3) {
//   console.log("3단이 맞습니다\n");
// } else {
//   console.log("틀렸습니다\n");
// }

// let arr = [80, 70, "글자", 90, 60];
// console.log(arr);
// console.log(arr[2]);

// let stdScore = {
//   korean: 80,
//   english: 70,
//   math: 90,
//   sicence: 60,
// };

// console.log(stdScore);
// console.log(stdScore.math);
// stdScore.name = "홍길동";
// console.log(stdScore);









const titles = ["곡성", "인터스텔라", "1917", "호프", "우주전쟁"];
const ratings = [7.38, 8.49, 8.47, 7.2, 6.57];
const years = [2016, 2014, 2019, 2026, 2005];
let sum = 0;

//합계 구하기
for (let i = 0; i < ratings.length; i++) {
  sum = sum + ratings[i];
}

let i = 0;
let newSum = 0;
while (i < ratings.length) {
  newSum = newSum + ratings[i];
  i++;
}
console.log("합계:", sum);
console.log("while 합계:", newSum);

//평균 구하기
const average = sum / ratings.length;
console.log("평균:", average);

//최고 평점 + 평점 8이상의 개수 구하기
let max = ratings[0];
let maxIndex = 0;
let count = 0;
for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] >= 8) count++; //평점 8이상의 개수
  if (ratings[i] > max) {
    //최고 평점/그 인덱스 구하기
    max = ratings[i];
    maxIndex = i;
  }
}
console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");

//등급 라벨
for (let i = 0; i < ratings.length; i++) {
  let label;
  if (ratings[i] >= 8.5) label = "명작";
  else if (ratings[i] >= 7) label = "추천";
  else label = "보통";
  console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

//년대 출력
let decades = [];
for (let i = 0; i < years.length; i++) {
  const decade = years[i] - (years[i] % 10);
  switch (decade) {
    case 1990:
      decades.push("1990년대");
      break;
    case 2000:
      decades.push("2000년대");
      break;
    case 2010:
      decades.push("2010년대");
      break;
    case 2020:
      decades.push("2020년대");
      break;
    default:
      decades.push("범위 벗어남");
  }
}
console.log("년대:", decades.join(", "));

//alert
const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);

document.getElementById("stats").textContent = "평균 " + avgText + "점";
