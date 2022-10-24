//9) Дан номер месяца. Выведите пору года (осень, зима, лето, весна).

let monthOfYear;
let numberOfMonth = 11;

switch (numberOfMonth) {
    case 1: {
        monthOfYear = 'Зима'
    break;
  }
    case 2: {
        monthOfYear = 'Зима'
    break;
  }
    case 3: {
        monthOfYear = 'Весна'
    break;
  }
    case 4: {
        monthOfYear = 'Весна'
    break;
  }
    case 5: {
        monthOfYear = 'Весна'
    break;
  }
    case 6: {
        monthOfYear = 'Лето'
    break;
  }
    case 7: {
        monthOfYear = 'Лето'
    break;
  }
    case 8: {
        monthOfYear = 'Лето'
    break;
  }
    case 9: {
        monthOfYear = 'Осень'
    break;
  }
    case 10: {
        monthOfYear = 'Осень'
    break;
  }
    case 11: {
        monthOfYear = 'Осень'
    break;
  }
   case 12: {
        monthOfYear = 'Зима'
    break;
  }
    default: {
        monthOfYear = 'Пожалуйста, введите число от 1 до 12'
    }
}
console.log(monthOfYear)