let input;
let total = 0;

do {
  input = prompt("Enter number");
  if (isNaN(Number(input)) === true) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    total = Number(input) + total;
  }
} while (input !== null);

alert(`'Общая сумма чисел равна ${total}'`);
