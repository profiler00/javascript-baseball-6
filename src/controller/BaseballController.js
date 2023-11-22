import OutputView from '../view/OutputView';
import BaseballHandler from '../baseballHandler/BaseballHandler';

import { message } from '../constants/messages';

class BaseballController {
  #baseballHandler;

  constructor() {
    this.#baseballHandler = new BaseballHandler();
  }

  // TODO: Mission 9: 전체 함수들을 실행 시켜주는 메인 함수 구현
  async main() {
    let endPoint = false;

    while (!endPoint) {
      OutputView.printMessage(message.GAME_START);
      const computer = this.#baseballHandler.getComputerNumber();
      endPoint = await this.#baseballHandler.isThreeStrike(computer);
    }
  }
}

export default BaseballController;
