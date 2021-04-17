//  function sum() {
//     return 1 + 2;
//  }

// console.log(sum())

// function sum2() {
//   return 3 + 2
// }

// console.log(sum2())

// var sum3 = function otherSum() {
//   return 5 + 8;
// }

// console.log(sum3())
// console.log(otherSum())


// IIFE - Immediately-Invoked Function Expression
// Ao passar a função entre parenteses, seguido de outros parenteses como se fosse invocar uma função normalmente, a mesma é invocada mesmo não possuindo um nome.
(function()  {
  console.log( 1 + 2);
})();
