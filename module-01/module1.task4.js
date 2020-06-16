let credits = 23580;
let pricePerDroid = 3000;
const ordered = prompt("Enter quantity");
let totalPrice;
let accountBalance;

if (ordered === null) {
  console.log("Отменено пользователем!");
} else if (
  isNaN(Number(ordered)) === true ||
  ordered.length === 0 ||
  Number(ordered) <= 0
) {
  alert("Incorrect data");
  console.log("Incorrect data");
} else {
  totalPrice = Number(ordered) * pricePerDroid;
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    let accountBalance = credits - totalPrice;
    alert(
      `"Вы купили ${ordered} дроидов, на счету осталось ${accountBalance} кредитов."`
    );
  }
}
