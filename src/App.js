import BaseballController from './controller/BaseBallController';

class App {
  baseballController = new BaseballController();

  async play() {
    await this.baseballController.main();
  }
}

export default App;
