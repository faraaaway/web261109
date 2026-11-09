// app.js : 영화 배열을 다루는 함수 6개 / 장성민(23)/  10주차
// average : 영화 배열 ⇒ 평균 평점(숫자)

const average = (list) => {
  let sum = 0;
  for (const m of list) {
    sum += m.rating;
  }
  return sum / list.length;
};

const best = (list) => {
  let top = list[0];
  for (const m of list) {
    if (m.rating > top.rating) top = m;
  }
  return top;
};

const best2 = (list) => {
  const max = Math.max(...list.map((m) => m.rating));
  return list.find((m) => m.rating === max);
};

const filterByRating = (list, min) => list.filter((m) => m.rating >= min);

const sortByRating = (list) => [...list].sort((a, b) => b.rating - a.rating);

const yearsSince = (dateStr) =>
  new Date().getFullYear() - new Date(dateStr).getFullYear();

const posterUrl = (path, size) => "https://image.tmdb.org/t/p/" + size + path;

console.log("평균:", average(movies));
console.log("최고:", best(movies).title);
console.log("최고(보너스):", best2(movies).title);
console.log("8점 이상:", filterByRating(movies, 8).length + "편");
const sorted = sortByRating(movies);
console.log("정렬 1위:", sorted[0].title, "/ 원본 1번:", movies[0].title);
console.log(yearsSince(movies[0].date) + "년 전 개봉");
console.log(posterUrl(movies[0].poster, "w342"));

document.title = "내 영화 " + movies.length + "편";
console.table(sortByRating(movies));
document.getElementById("out").textContent =
  "평균 " + average(movies).toFixed(1) + "점, 최고 " + best(movies).title;

const boxTop = {
  title: "극장판 치이카와: 인어 섬의 비밀",
  audience: 1875606,
};
console.log(
  "박스오피스 1위 관객수: " + boxTop.audience.toLocaleString("ko-KR") + "명",
);

console.log(
  `navigator.language=${navigator.language} location.href=${location.href}`,
);
// live Server: navigator.language=ko-KR location.href=http://127.0.0.1:5500/
