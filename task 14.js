//14) Дано четырехзначное число. Переставить цифры так, чтобы получилось наибольшее из возможных число.

const n = 3524;
let arr = Array.from(String(n)).map(i=>Number(i))
 arr = arr.sort().reverse();
 let a = arr.toString().replaceAll(',','');
 let b = Number(a);
console.log(b)