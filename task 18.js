//18) Найдите сумму 1+3+5+7+...+37.

let sum = 0;

for(i = 1; i <= 37; i += 2) {
  sum += i;
}
console.log(sum)