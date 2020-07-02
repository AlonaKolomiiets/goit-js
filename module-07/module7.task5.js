// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

//<input type="text" placeholder="Ваше имя?" id="name-input" />
//<h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

function updateSpan() {
  const name = input.value;
  if (name.length > 0) {
    span.innerText = name;
  } else {
    span.innerText = "незнакомец";
  }
}

input.addEventListener("input", updateSpan);
