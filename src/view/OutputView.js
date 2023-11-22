import { MissionUtils } from '@woowacourse/mission-utils';
import { message } from '../constants/messages';

const OutputView = {
  // TODO: Mission 1: 메세지 출력 함수 구현
  printMessage(message = {}) {
    MissionUtils.Console.print(message);
  },

  // TODO: Mission 6: 스트라이크, 볼 계산 후 문구 출력하는 함수 구현
  printScore(strike = {}, ball = {}) {
    if (!strike && !ball) {
      this.printMessage(message.NOTHING);
    } else {
      let output = '';
      if (ball) {
        output += `${ball}${message.BALL} `;
      }
      if (strike) {
        output += `${strike}${message.STRIKE}`;
      }
      this.printMessage(output);
    }
  },
};

export default OutputView;
