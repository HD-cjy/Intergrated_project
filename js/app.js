// test app js
// // // // 시간 날짜 연도 등 다 표시하는 시계
function setTime() {
  const time = new Date();
  const 연도 = time.getFullYear().toString();
  const 월 = (time.getMonth() + 1).toString(); // 배열 특성상 0 부터 시작이므로 +1 해줌
  const 날짜 = time.getDate().toString();
  const 요일 = ["일", "월", "화", "수", "목", "금", "토"][time.getDay()];
  const 시 = time.getHours().toString();
  const 분 = time.getMinutes().toString();
  const 초 = time.getSeconds().toString();
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `${연도}년 ${월.padStart(2, "0")}월 ${날짜.padStart(
    2,
    "0"
  )}일 (${요일}) ${시.padStart(2, "0")}:${분.padStart(2, "0")}:${초.padStart(
    2,
    "0"
  )}`;
}
setInterval(setTime, 1000);
