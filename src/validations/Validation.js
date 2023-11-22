import { random } from "../constants/constants";
import { errorMessage } from "../constants/messages";

const Validation = {
  isValidLength(userNumber) {
    if (userNumber.length !== random.LIMIT) {
      throw new Error(errorMessage.INVALID_LENGTH);
    }
  },
};

export default Validation;
