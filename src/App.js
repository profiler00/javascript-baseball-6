import { MissionUtils } from '@woowacourse/mission-utils';

// TODO: Mission 1: 메세지 출력 함수 구현
const printMessage = message => {
  MissionUtils.Console.print(message);
};

// TODO: Mission 2: 메세지 입력 함수 구현
const inputMessage = async message => {
  return await MissionUtils.Console.readLineAsync(message);
};

// TODO: Mission 3: 상대방(컴퓨터)의 3자리 랜덤 숫자 생성 함수 구현
const getComputerNumber = () => {
  const computerNumberList = [];
  while (computerNumberList.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumberList.includes(randomNumber)) {
      computerNumberList.push(randomNumber);
    }
  }
  return computerNumberList;
};

// TODO: Mission 4: 사용자(인터페이스)가 입력한 수를 리스트로 출력하는 함수 구현
const getUserNumber = async () => {
  const userNumber = await inputMessage('숫자를 입력해주세요 : ');
  if (userNumber.length !== 3) {
    throw new Error('[ERROR] 3자리 숫자를 입력해주세요.');
  }
  const userNumberList = userNumber.split('').map(Number);
  return userNumberList;
};

// TODO: Mission 5: 스트라이크, 볼 계산 함수 구현
const calculateScore = (computer, user) => {
  let strikeCount = 0;
  let ballCount = 0;

  for (let i = 0; i < computer.length; i++) {
    for (let j = 0; j < user.length; j++) {
      if (computer[i] === user[j]) {
        if (i === j) {
          strikeCount++;
        } else {
          ballCount++;
        }
      }
    }
  }
  return { strikeCount, ballCount };
};

// TODO: Mission 6: 스트라이크, 볼 계산 후 문구 출력하는 함수 구현
const printScore = (strike, ball) => {
  let output = '';

  if (strike === 0 && ball === 0) {
    printMessage('낫싱');
  } else if (ball > 0) {
    output += `${ball}볼`;
  } else if (strike > 0) {
    output += `${strike}스트라이크`;
  }

  printMessage(output);
};

// TODO: Mission 7: 게임 재시작 또는 종료 처리 함수 구현
const gameStartOver = async () => {
  const startOver = Number(
    await inputMessage(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    ),
  );
  return startOver !== 1;
};

// TODO: Mission 8: "3스트라이크"이면, 게임 종료 하는 함수 구현
const isThreeStrike = async computerList => {
  let endpoint = false;

  while (!endpoint) {
    const userList = await getUserNumber(computerList);
    const { strikeCount, ballCount } = calculateScore(computerList, userList);
    printScore(strikeCount, ballCount);
    if (strikeCount === 3) {
      printMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return gameStartOver();
    }
  }
};

// TODO: Mission 9: 전체 함수들을 실행 시켜주는 메인 함수 구현
const main = async () => {
  printMessage('숫자 야구 게임을 시작합니다.');
  const computer = getComputerNumber();
};

class App {
  async play() {
    await main();
  }
}

export default App;
