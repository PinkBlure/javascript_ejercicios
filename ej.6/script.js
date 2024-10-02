const body = document.getElementById('body')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const num= parseInt(document.getElementById('num').value)

    const resultado = document.createElement('p')
    resultado.textContent = ""

    for (let i=0; i<=10; i++) {
        resultado.innerHTML += `${num} x ${i} = ${num * i}<br>`
    }

    body.appendChild(resultado)
})