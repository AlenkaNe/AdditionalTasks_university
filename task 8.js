//8) Дан номер дня недели. Выведите название дня недели.

let dayOfWeek;
let numberOfWeek = 6;

switch (numberOfWeek) {
    case 1: {
        dayOfWeek = 'Понедельник'
    break;
  }
    case 2: {
        dayOfWeek = 'Вторник'
    break;
  }
    case 3: {
        dayOfWeek = 'Среда'
    break;
  }
    case 4: {
        dayOfWeek = 'Четверг'
    break;
  }
    case 5: {
        dayOfWeek = 'Пятница'
    break;
  }
    case 6: {
        dayOfWeek = 'Суббота'
    break;
  }
    case 7: {
        dayOfWeek = 'Воскресенье'
    break;
  }
    default: {
        dayOfWeek = 'Пожалуйста, введите число от 1 до 6'
    }
}
console.log(dayOfWeek)

//Второй вариант выполнения с помощью массива
// let i = 5;
// let dayOfWeek = ['Введите число от 1 до 6', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь']
// if (i < dayOfWeek.length) {
//   console.log(dayOfWeek[i])
// } else {
//   console.log('Введите число от 1 до 6')
// }