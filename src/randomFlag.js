window.onload = function () {
  let countryGroup = new Array();
  let countryRest;
  let blank;

  // 나라별 이름과 국기 객체로 만들기.
  class Country {
    constructor(name, flag) {
      this.name = name;
      this.flag = flag;
    }
    show() {
      // flag img src 의 링크 주소를 보여주기.
      let flagImg = document.querySelector('#flagImg > img');
      flagImg.setAttribute('src', this.flag);
    }
  }

  // 나라별 객체를 countryGroup에 담기.
  countryGroup.push(new Country("대한민국", "./src/img/flag01.png"));
  countryGroup.push(new Country("캐나다", "./src/img/flag02.png"));
  countryGroup.push(new Country("아일랜드", "./src/img/flag03.png"));
  countryGroup.push(new Country("중국", "./src/img/flag04.png"));
  countryGroup.push(new Country("영국", "./src/img/flag05.png"));
  countryGroup.push(new Country("리히텐슈타인", "./src/img/flag06.png"));
  countryGroup.push(new Country("세인트빈센트 그레나딘", "./src/img/flag07.png"));
  countryGroup.push(new Country("오스트레일리아", "./src/img/flag08.png"));
  countryGroup.push(new Country("독일", "./src/img/flag09.png"));
  countryGroup.push(new Country("일본", "./src/img/flag10.png"));
  countryGroup.push(new Country("네덜란드", "./src/img/flag11.png"));
  countryGroup.push(new Country("튀르키예", "./src/img/flag12.png"));
  countryGroup.push(new Country("과테말라", "./src/img/flag13.png"));
  countryGroup.push(new Country("멕시코", "./src/img/flag14.png"));
  countryGroup.push(new Country("아르헨티나", "./src/img/flag15.png"));
  countryGroup.push(new Country("브라질", "./src/img/flag16.png"));
  countryGroup.push(new Country("이집트", "./src/img/flag17.png"));
  countryGroup.push(new Country("방글라데시", "./src/img/flag18.png"));
  countryGroup.push(new Country("카메룬", "./src/img/flag19.png"));
  countryGroup.push(new Country("남아프리카 공화국", "./src/img/flag20.png"));
  countryGroup.push(new Country("오스트레일리아", "./src/img/flag21.png"));
  countryGroup.push(new Country("조선민주주의인민공화국", "./src/img/flag22.png"));
  countryGroup.push(new Country("몽골", "./src/img/flag23.png"));
  countryGroup.push(new Country("태국", "./src/img/flag24.png"));
  countryGroup.push(new Country("베트남", "./src/img/flag25.png"));
  countryGroup.push(new Country("캄보디아", "./src/img/flag26.png"));

  // 랜덤으로 국가 하나 뽑기
  // index값과 이름 불러오기.
  let randomPick = Math.floor(Math.random() * countryGroup.length);
  let randomPickName = countryGroup[randomPick].name;

  // 랜덤픽 제외 국가들 담기
  countryRest = [...countryGroup];
  for (let i = 0; i < countryRest.length; i++) {
    if (i === randomPick) {
      countryRest.splice(i, 1);
    }
  }

  // 랜덤픽 제외 국가들 중 랜덤으로 3개 뽑기
  let i = 0;
  while (i !== countryRest.length) {
    let randomOtherPick = Math.floor(Math.random() * countryRest.length);
    blank = countryRest.splice(randomOtherPick, 1);
    if (countryRest.length === 3) {
      break;
    }
    i++;
  }

  // 랜덤픽과 랜덤픽 제외 국가들 중 랜덤 3개 뽑은 거 합치기
  let flagAnswer = new Array();
  flagAnswer = [...countryRest, countryGroup[randomPick]];

  // 웹브라우저 화면에 randomPick 이미지 출력
  countryGroup[randomPick].show();

  // 보기 4가지 suffle 시킨뒤 출력.
  function suffle(array) {
    let currentIndex = array.length;
    
    while (currentIndex !== 0) {
      // 4
      let randomIndex = Math.floor(Math.random() * currentIndex); //
      currentIndex--; //3

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }
  
  let array = flagAnswer; //array에 보기 4가지 배열 담기.
  suffle(array); // suffle함수에 파라미터에 배열값 담기.

  // btnGroup에 li 아이디 값들 저장하기.
  let btnGroup = new Array();
  for (i = 1; i <= flagAnswer.length; i++) {
    let Btn = document.getElementById("btn" + [i]);
    btnGroup.push(Btn);
  }

  // btnGroup에 객관식 보기 답 4개 flagAnswer 값 넣기
  for (i = 0; i < btnGroup.length; i++) {
    btnGroup[i].textContent = flagAnswer[i].name;
  }

  // 정답 선택. 각 버튼 클릭했을 때 pick과 값이 같은지 확인하기.
  for (i = 0; i < btnGroup.length; i++) {
    btnGroup[i].onclick = function () {
      let v = this.textContent === randomPickName ? "정답" : "오답";
      alert(v);
    };
  }

  document.getElementById('reload').onclick = function(){
    window.location.reload();
  };
};
