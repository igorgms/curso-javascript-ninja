var nome = "Igor";

console.log (nome.length)

typeof 10


function subtract(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 - num2
    }
    return "Você digitou algo diferente de um número!"
}

console.log(subtract(10, 2))
console.log(subtract('js', 2))
console.log(subtract({}, []))
