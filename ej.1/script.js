const suma = (num1, num2) => {
    return num1 + num2
}

const resta = (num1, num2) => {
    return num1 - num2
}

const multiplicacion = (num1, num2) => {
    return num1 * num2
}

const division = (num1, num2) => {
    return num1 / num2
}

const modulo = (num1, num2) => {
    return num1 % num2
}

const body = document.getElementById('body')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1= parseFloat(document.getElementById('num1').value)
    const num2= parseFloat(document.getElementById('num2').value)

    const sumaElement = document.createElement('p')
    sumaElement.textContent = `La suma es = ${suma(num1, num2)}`
    body.appendChild(sumaElement)

    const restaElement = document.createElement('p')
    restaElement.textContent = `La resta es = ${resta(num1, num2)}`
    body.appendChild(restaElement)

    const multiplicacionElement = document.createElement('p')
    multiplicacionElement.textContent = `La multiplicación es = ${multiplicacion(num1, num2)}`
    body.appendChild(multiplicacionElement)

    const divisionElement = document.createElement('p')
    divisionElement.textContent = `La división es = ${division(num1, num2)}`
    body.appendChild(divisionElement)

    const moduloElement = document.createElement('p')
    moduloElement.textContent = `El módulo es = ${modulo(num1, num2)}`
    body.appendChild(moduloElement)
})