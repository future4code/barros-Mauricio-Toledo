import { userCanPurchase } from "../src/functions/function";
import { userDto,userInputDTO } from "../src/models/User";


describe.skip("Testes ", () => {
  test("Teste de compra do cliente: saldo igual ao valor da compra, deve zerar o saldo", () => {
    const purchase: userInputDTO = {
      user: {
        name: "Elon Musk",
        userBalance: 5500,
      },
      value: 5500,
    };
    const result: userDto = {
      name: "Elon Musk",
      userBalance: 0,
    };

    expect(userCanPurchase(purchase)).toStrictEqual(result);
  })
})
