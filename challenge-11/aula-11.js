var counter = 10;
while (counter < 10) {
  console.log(counter++);
}

console.log('com o do while');

var counter2 = 10;
do {
  console.log(counter2++);
} while(counter2 < 10);

console.log("com o for in")

var car = {
  brand: "Volkswagen",
  model: "Gol",
  year: 2016
}
// O método for in é utilizado para percorrer as propriedades de um objeto, é bom salientar que esse método é mais lento do que se for utilizado um "for" por exemplo.
for (var prop in car) {
  console.log(prop);
}

// utilizando o método for in para verificar se existe determinada propriedade dentro de um objeto
console.log('brand in car? ', 'brand' in car);
