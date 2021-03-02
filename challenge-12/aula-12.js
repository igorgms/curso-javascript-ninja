
var obj = {
  x: 1,
  y: 2
}

// criando um novo objeto passando um objeto já existente como parâmetro
var obj2 =  Object.create(obj)


console.log(obj2)
// dessa forma obj2 por mais que não possua nenhuma propriedade, leva consigo como forma de herança conhecida como "prototype" as propriedades do obj1
console.log(obj2.x)

// é possível sobreescrever a propriedade x que foi passada como herança ao obj2 e essa sobreposição só altera a propriedade no objeto filho, sendo assim a propriedade x continua com o mesmo valor no obj que é o objeto pai
obj2.x = "sobreescreveu"
console.log(obj2.x)

obj2.z = 3;

// ao realizar um for in para percorrer um objeto, ele trará também as props que foram passadas como herança, caso queira pegar apenas as props que foram criadas par ao obj2 em questão, é necessário utilizar a propriedade "hasOwnProperty"
for (var prop in obj2) {
  console.log(prop)
}

console.log('-------------------------------------------------------------------')

for (var prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(prop)
  }
}

// este método tras todas as propriedades de um objeto dentro de um array
var arrayObj = Object.keys(obj)
console.log(arrayObj)
