//7) Даны три числа. Если сумма двух из них равна третьему, 
//то выведите такое равенство, если нет, то выведите произведение этих чисел.

let a = 11;
let b = 14;
let c = 3;
if (a + b === c) {
  console.log(`${a} + ${b} = ${c}`);
} else if (a + c === b) {
  console.log(`${a} + ${c} = ${b}`);
} else if(b + c === a) {
 console.log(`${b} + ${c} = ${a}`);
} else {
  console.log(a * b * c)
}