const body = document.getElementById('body')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const num= parseInt(document.getElementById('num').value)

    let factorial = 1
    for (let i = 2; i <= num; i++) {
        factorial *= i
    }

    const resultado = document.createElement('p')
    resultado.textContent = `${factorial}`
    
    body.appendChild(resultado)
})

