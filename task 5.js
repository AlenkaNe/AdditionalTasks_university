//5) Дан номер месяца первого полугодия. Вывести на консоль название месяца.

let months;
let numberOfMonths = 6;

switch (numberOfMonths) {
    case 1: {
        months = 'Январь'
    break;
  }
    case 2: {
        months = 'Февраль'
    break;
  }
    case 3: {
        months = 'Март'
    break;
  }
    case 4: {
        months = 'Апрель'
    break;
  }
    case 5: {
        months = 'Май'
    break;
  }
    case 6: {
        months = 'Июнь'
    break;
  }
    default: {
        months = 'Пожалуйста, введите число от 1 до 6'
    }
}
console.log(months)

//Второй вариант выполнения с помощью массива
// let i = 0;
// let months = ['Введите число от 1 до 6', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь']
// if (i < months.length) {
//   console.log(months[i])
// } else {
//   console.log('Введите число от 1 до 6')
// }