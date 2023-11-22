import { MissionUtils } from '@woowacourse/mission-utils';
import { random, integer, newGame } from './constants/constants';
import { message } from './constants/messages';
import Validation from './validations/Validation';

// TODO: Mission 1: 메세지 출력 함수 구현
function printMessage(message = {}) {
  MissionUtils.Console.print(message);
}

// TODO: Mission 2: 메세지 입력 함수 구현
async function inputMessage(message = {}) {
  return await MissionUtils.Console.readLineAsync(message);
}

// TODO: Mission 3: 상대방(컴퓨터)의 3자리 랜덤 숫자 생성 함수 구현
function getComputerNumber() {
  const computerNumberList = [];
  while (computerNumberList.length < random.LIMIT) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      random.MIN_RANGE,
      random.MAX_RANGE,
    );
    if (!computerNumberList.includes(randomNumber)) {
      computerNumberList.push(randomNumber);
    }
  }
  return computerNumberList;
}

// TODO: Mission 4: 사용자(인터페이스)가 입력한 수를 리스트로 출력하는 함수 구현
async function getUserNumber() {
  const userNumber = await inputMessage(message.INPUT_NUMBER);
  Validation.isValidLength(userNumber);
  const userNumberList = userNumber.split('').map(Number);
  return userNumberList;
}

// TODO: Mission 5: 스트라이크, 볼 계산 함수 구현
function calculateScore(computer = {}, user = {}) {
  let strikeCount = integer.ZERO;
  let ballCount = integer.ZERO;

  computer.map((computerItems, computerIndex) => {
    user.map((userItems, userIndex) => {
      if (computerItems === userItems) {
        if (computerIndex === userIndex) {
          strikeCount++;
        } else {
          ballCount++;
        }
      }
    });
  });

  return { strikeCount, ballCount };
}

// TODO: Mission 6: 스트라이크, 볼 계산 후 문구 출력하는 함수 구현
function printScore(strike = {}, ball = {}) {
  if (!strike && !ball) {
    printMessage(message.NOTHING);
  } else {
    let output = '';
    if (ball) {
      output += `${ball}${message.BALL} `;
    }
    if (strike) {
      output += `${strike}${message.STRIKE}`;
    }
    printMessage(output);
  }
}

// TODO: Mission 7: 게임 재시작 또는 종료 처리 함수 구현
async function gameStartOver() {
  const startOver = Number(await inputMessage(message.GAME_RESTART));
  return startOver !== newGame.START;
}

// TODO: Mission 8: "3스트라이크"이면, 게임 종료 하는 함수 구현
async function isThreeStrike(computerList = {}) {
  let endPoint = false;

  while (!endPoint) {
    const userList = await getUserNumber(computerList);
    const { strikeCount, ballCount } = calculateScore(computerList, userList);
    printScore(strikeCount, ballCount);
    if (strikeCount === random.LIMIT) {
      printMessage(message.THREE_STRIKE);
      return gameStartOver();
    }
  }
}

// TODO: Mission 9: 전체 함수들을 실행 시켜주는 메인 함수 구현
async function main() {
  let endPoint = false;

  while (!endPoint) {
    printMessage(message.GAME_START);
    const computer = getComputerNumber();
    endPoint = await isThreeStrike(computer);
  }
}

class App {
  async play() {
    await main();
  }
}

export default App;
