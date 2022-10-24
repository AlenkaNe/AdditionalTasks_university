//19) Найдите произведение 1⋅2⋅3⋅…⋅n.

//С помощью функции
function func(n) {
    return n ? n*func(n-1) : 1
   }
   console.log(func(4))


//С помощью цикла
// let n = 4;
// let proizvedenie = 1;
// for(let i = 1; i <= n; i++) {
//   proizvedenie *= i;
// }
// console.log(proizvedenie)