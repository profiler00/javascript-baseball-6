import { MissionUtils } from '@woowacourse/mission-utils';
import { message } from '../constants/messages';
import { integer, random } from '../constants/constants';

import InputView from '../view/InputView';
import OutputView from '../view/OutputView';

class BaseballHandler {
  // TODO: Mission 3: 상대방(컴퓨터)의 3자리 랜덤 숫자 생성 함수 구현
  getComputerNumber() {
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

  // TODO: Mission 5: 스트라이크, 볼 계산 함수 구현
  calculateScore(computer = {}, user = {}) {
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

  // TODO: Mission 8: "3스트라이크"이면, 게임 종료 하는 함수 구현
  async isThreeStrike(computerList = {}) {
    let endPoint = false;

    while (!endPoint) {
      const userList = await InputView.getUserNumber(computerList);
      const { strikeCount, ballCount } = this.calculateScore(
        computerList,
        userList,
      );
      OutputView.printScore(strikeCount, ballCount);
      if (strikeCount === random.LIMIT) {
        OutputView.printMessage(message.THREE_STRIKE);
        return InputView.gameStartOver();
      }
    }
  }
}

export default BaseballHandler;
