const quotes = [
  {
    quote: "강한자가 살아남는 것이 아니라 살아남는 자가 강한 것이다.",
    author: "김유신",
  },
  {
    quote: "고기는 씹을수록 맛이 난다. 그리고 책도 읽을수록 맛이 난다. 다시 읽으면서 처음에 지나쳤던 것을 발견하고 새롭게 생각하는 것이다 말하자면 100번 읽고 100번 익히는 셈이다.",
    author: "세종대왕",
  },
  {
    quote:
      "내가 남을 알지 못하는 것이 죄일 뿐 남이 나를 알아주지 않는게 무슨 죄란 말인가?",
    author: "장영실",
  },
  {
    quote: "가볍게 움직이지 말라 침착하게 태산같이 무거이 행동하라 나를 알고 적을 알아야만 백 번 싸워도 위태함이 없다.",
    author: "충무공 이순신",
  },
  {
    quote: "배우는 사람은 모름지기 심신을 수련해야 한다.",
    author: "퇴계 이황",
  },
  {
    quote: "뜻이 서지 않으면 만사가 성공하지 못한다. 먼저 반듯이 뜻을 세워라.",
    author: "율곡 이이",
  },
  {
    quote: "말은 망령되게 하지 말아야 한다. 기품을 지키되 사치하지 말 것이고 지성을 갖추되 자랑하지 말라.",
    author: "신사임당",
  },
  {
    quote: "세월을 헛되이 보내지 마라 청춘은 다시 돌아오지 않는다.",
    author: "안중근 의사",
  },
  {
    quote: "겸손은 사람을 머물게 하고 칭찬은 사람을 가깝게 하고 넓음은 사람을 따르게 하고 깊음은 사람을 감동케 한다.",
    author: "다산 정약용",
  },
  {
    quote: "진실은 반드시 따르는 자가 있고 정의는 반드시 이루는 날이 있다.",
    author: "도산 안창호",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
