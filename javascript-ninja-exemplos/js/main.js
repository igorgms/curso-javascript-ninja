(function(win, doc) {
  'use strict'

  var $inputUsername = doc.querySelector('#username');
  var $inputPassword = doc.querySelector('#password');
  var $button = doc.querySelector('#button');

  $button.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Cliquei')
  }, false);

  $inputUsername.addEventListener('click', function() {
    alert('Clicou no input!')
  }, false);

  // setter - seta os valores nos respectivos campos

  // $inputUsername.value = 'Igor Gomes Firmino';
  // $inputPassword.value = 'minhasenha';

  // getter - obtém os valores que estão contidos nos campos

  // console.log($inputUsername.value, $inputPassword.value)
})(window, document);
