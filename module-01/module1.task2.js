const total = 100;
const ordered = prompt("Enter quantity of goods");
const convertedOrder = Number(ordered);

// console.log(ordered);

if (ordered === null || ordered.length === 0) {
  alert("Quantity not entered");
  console.log("action canceled");
} else if (isNaN(Number(ordered)) === true || convertedOrder <= 0) {
  alert("Incorrect data");
  console.log("Entered incorrect data");
} else {
  if (convertedOrder <= total) {
    console.log("Заказ оформлен, с вами свяжется менеджер");
  } else {
    console.log("На складе недостаточно товаров");
  }
}
