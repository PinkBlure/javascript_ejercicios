const body = document.getElementById('body')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const edad= parseInt(document.getElementById('edad').value)
    const resultado = document.createElement('p')

    if (edad >= 18) {
        resultado.textContent = "Eres mayor de edad"
    } else {
        resultado.textContent = "No eres mayor de edad"
    }

    body.appendChild(resultado)
})

