(function() {
  'use strict'

  var counter = 0;
  var $button = document.querySelector('[data-js="button"]');
  var temporizador;

  function timer() {
    console.log('timer', counter++);
    if (counter > 15) return;
    temporizador = setTimeout(timer, 1000);
  }

  timer();

  $button.addEventListener('click', function() {
    clearTimeout(temporizador);
  }, false);
})();
