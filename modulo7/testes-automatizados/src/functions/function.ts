import { userDto, userInputDTO } from "../models/User";

export const userCanPurchase = (
    input: userInputDTO
  ): userDto | undefined => {
    const userInput: userInputDTO = {
      user: {
        name: input.user.name,
        userBalance: input.user.userBalance,
      },
      value: input.value,
    };
  
    if (userInput.value <= userInput.user.userBalance) {
      return {
        name: userInput.user.name,
        userBalance: userInput.user.userBalance - userInput.value,
      };
    }
    return undefined;
  };