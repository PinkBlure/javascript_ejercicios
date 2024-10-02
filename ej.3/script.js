const body = document.getElementById('body')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1= parseInt(document.getElementById('num1').value)
    const num2= parseInt(document.getElementById('num2').value)
    const num3= parseInt(document.getElementById('num3').value)

    const resultado = document.createElement('p')
    resultado.textContent = `${Math.max(num1, num2, num3)}`
    body.appendChild(resultado)
})

