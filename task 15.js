//15) Вывести на экран 8 раз фразу "Loading...".

function loading() {
    console.log('Loading...')
  }
  const intervalId = setInterval (loading, 1000)
  setTimeout(function() {
    clearInterval(intervalId)
  }, 8000)