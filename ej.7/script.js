const body = document.getElementById('body')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const num= parseInt(document.getElementById('num').value)

    const resultado = document.createElement('p')
    
    if (num >= 15) {
        resultado.textContent = "Hace calor"
    } else {
        resultado.textContent = "Hace frío"
    }

    body.appendChild(resultado)
})