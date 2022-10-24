//13) Даны три числа. Найти наибольшую сумму двух чисел из них.

let a = 8;
let b = 0;
let c = 4;
if (a > c && b > c) {
  console.log(a + b)
} else if (b > a && c > a) {
  console.log(c + b)
} else if (a > b && c > b) {
  console.log(a + c)
} else {
  console.log('Вы ввели 3 одинаковых числа')
}