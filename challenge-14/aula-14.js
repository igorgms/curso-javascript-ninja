var arr = [1, 2, 3, 4, 5];

var reduce =  arr.reduce(function(acumulado, atual, index, array) {
  return acumulado + atual;
}, 0); // este 0 representa o valor de inicio que está acumulado

console.log(reduce)

// existe também o reduceRight() que consiste nas mesmas características que o reduce possui, a unica diferença é que o mesmo faz as reduções do final do array para o inicio, ou seja, de maneira reversa
console.log('---------------------------------------------------')

// o método indexOf() retorna o indice dentro do array do elemento que foi passado como parâmetro
console.log(arr.indexOf(3))

// caso o mesmo não exista é retornado -1
console.log(arr.indexOf(8))

// outra forma de utilizar o indexOf, pode ser passado outro parâmetro que funciona como uma 'condição', no exemplo abaixo, a condição é se existe um numero 2, a partir do indice 2 do array
console.log(arr.indexOf(2, 2))
console.log(arr.indexOf(4, 2))

// o método lastIndexOf possui a mesma caracteristica do indexOf, o que o diferencia é apenas que ele começa as buscas do final para o inicio do array
console.log(arr.lastIndexOf(2))
