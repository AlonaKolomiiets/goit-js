const ADMIN_PASSWORD = "jqueryismyjam";
const userPassword = prompt("Enter password");
let message;

if (userPassword === null) {
  message = "Отменено пользователем!";
  console.log("Отменено пользователем!");
} else if (userPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
  console.log("Добро пожаловать!");
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
