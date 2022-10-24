//17) Вывести на экран n строк, каждая из которых состоит из m нулей.

let n = 6;
let m = 4;
function arr() {
    console.log(Array.from('0'.repeat(m)))
  }
  const intervalId = setInterval (arr, 1000)
  setTimeout(function() {
    clearInterval(intervalId)
  }, n*1000)


// Работает не очень красиво, но работает...