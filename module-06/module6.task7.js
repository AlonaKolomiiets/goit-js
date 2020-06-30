// Получить общую сумму баланса (поле balance) всех пользователей.
import users from "./tt.js";

const calculateTotalBalance = (users) => {
  return users.reduce((acc, next) => acc + next.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
