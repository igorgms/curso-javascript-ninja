var func = function teste() {
  return "hi";
};
console.log(func());
// retorna o nome que foi passado para a função
console.log(func.name);

var func2 = function myFunction() {};

console.log(func2.name);

// função literal
function myFunction2() {
  return "function2";
}

console.log(myFunction2());
console.log(myFunction2.name);

function person() {
  var info = {
    name: "Igor",
    lastName: "Gomes Firmino",
  };

  return info;
}

console.log(person().name + " " + person().lastName);

function adder(x) {
  return function (y) {
    return x + y;
  };
}

var add2 = adder("x");
console.log(adder(2)(25));

var car = {
  color: "yellow",
};

function getCarColor(mycar) {
  return mycar.color;
}

console.log(getCarColor(car));

function showOtherFunction(func) {
  return func();
}

function returnedFunction() {
  return "Returned Function";
}

console.log(showOtherFunction(returnedFunction));
