import { MissionUtils } from '@woowacourse/mission-utils';
import { newGame } from '../constants/constants';
import { message } from '../constants/messages';

import Validation from '../validations/Validation';

const InputView = {
  // TODO: Mission 2: 메세지 입력 함수 구현
  async inputMessage(message = {}) {
    return await MissionUtils.Console.readLineAsync(message);
  },

  // TODO: Mission 4: 사용자(인터페이스)가 입력한 수를 리스트로 출력하는 함수 구현
  async getUserNumber() {
    const userNumber = await this.inputMessage(message.INPUT_NUMBER);
    Validation.isValidLength(userNumber);
    const userNumberList = userNumber.split('').map(Number);
    return userNumberList;
  },

  // TODO: Mission 7: 게임 재시작 또는 종료 처리 함수 구현
  async gameStartOver() {
    const startOver = Number(await this.inputMessage(message.GAME_RESTART));
    return startOver !== newGame.START;
  },
};

export default InputView;
