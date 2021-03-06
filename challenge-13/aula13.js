var  arr = [1, 2, 3, 4, 5, 6, 7]

// o forEach recebe como parâmetros o item, indice e o array
arr.forEach(function(item, index, array) {
  console.log({index, item});
})
var sum = 0;
arr.forEach(function(item, index, array) {
  sum += item;
})

console.log(sum)

// Método every() - aplica uma função que também funciona como um laço de iteração dentro dos elementos do array que retorna true ou false

var every = arr.every(function(item) {
  return item < 5;
})
// neste caso ele retornará false pq nem todos os valores do array são menores que 5
console.log(every)


// Método some() - no caso do some se pelo menos um item da condição passada na função for = true, ele retornará true

var some = arr.some(function(item) {
  return item % 2 === 0;
})

console.log(some)

// retorna um novo array, não modificando o original
var map = arr.map(function(item, index, array) {
  return { index, item };
})

console.log('arr', arr, 'map', map)

var filter = arr.filter(function(item) {
  return item > 2
})

console.log(filter)
