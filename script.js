
let numberOne = prompt("Digite o primeiro numero:")
let numberTwo = prompt("Digite o segundo numero: ")

let sum = Number(numberOne) + Number(numberTwo)

let subtraction = Number(numberOne) - Number(numberTwo)

let multiplication = Number(numberOne) * Number(numberTwo)

let division = Number(numberOne) / Number(numberTwo)

let restOfDivision = Number(numberOne) % Number(numberTwo)

alert(sum)
alert(subtraction)
alert(multiplication)
alert(division.toFixed(2))
alert(restOfDivision)

if (sum % 2 === 0) {
    alert("A soma é um número par")
}else {
    alert("A soma é um número ímpar")
}

if (numberOne === numberTwo) {
    alert("Os dois numeros são iguais")
}else {
    alert("Os dois numeros são diferentes")
}