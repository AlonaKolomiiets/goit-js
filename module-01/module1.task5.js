let inputCountry = prompt("Enter country of delivery");
const countryChina = "Китай";
let deliveryChina = 100;
const countryChile = "Чили";
let deliveryChile = 250;
const countryAustralia = "Австралия";
let deliveryAustralia = 170;
const countryIndia = "Индия";
let deliveryIndia = 80;
const countryJamaica = "Ямайка";
let deliveryJamaica = 120;

if (inputCountry !== null) {
  switch (inputCountry.toLowerCase()) {
    case "китай":
      alert(
        `'Доставка в ${countryChina} будет стоить ${deliveryChina} кредитов'`
      );
      break;

    case "чили":
      alert(
        `'Доставка в ${countryChile} будет стоить ${deliveryChile} кредитов'`
      );
      break;

    case "австралия":
      alert(
        `'Доставка в ${countryAustralia} будет стоить ${deliveryAustralia} кредитов'`
      );
      break;

    case "индия":
      alert(
        `'Доставка в ${countryIndia} будет стоить ${deliveryIndia} кредитов'`
      );
      break;

    case "ямайка":
      alert(
        `'Доставка в ${countryJamaica} будет стоить ${deliveryJamaica} кредитов'`
      );
      break;

    default:
      alert("В вашей стране доставка недоступна");
      break;
  }
} else alert("Отменено пользователем");
