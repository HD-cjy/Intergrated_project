// 게임 초기화 함수
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

  document.querySelector(".dice").style.display = "none";
}

// 다음 플레이어로 넘기는 함수
function nextPlayer() {
  roundScore = 0;
  document.querySelector("#current-" + activePlayer).textContent = "0";
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

// 주사위 굴리기 버튼 클릭 이벤트 처리
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. 1에서 6까지의 랜덤 숫자 생성
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. 주사위 이미지 업데이트 및 보이기
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // 3. 주사위가 1이 나왔는지 체크
    if (dice !== 1) {
      // 현재 점수 업데이트
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 다음 플레이어로 넘기기
      nextPlayer();
    }
  }
});

// 홀드 버튼 클릭 이벤트 처리
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // 현재 점수를 전체 점수에 추가
    scores[activePlayer] += roundScore;

    // UI에 전체 점수 업데이트
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // 승리 점수인 50에 도달했는지 체크
    if (scores[activePlayer] >= 50) {
      document.querySelector("#name-" + activePlayer).textContent = "승자!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // 다음 플레이어로 넘기기
      nextPlayer();
    }
  }
});

// 새 게임 버튼 클릭 이벤트 처리
document.querySelector(".btn-new").addEventListener("click", init);

// 게임 초기화
init();
