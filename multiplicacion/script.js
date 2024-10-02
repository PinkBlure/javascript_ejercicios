const tablaMultiplicacion = (father, num) => {
    for (let i=0; i<=10; i++) {
        const linea = document.createElement('p')
        linea.textContent = `${num} x ${i} = ${num * i}`
        father.appendChild(linea)
    }
}

const body = document.getElementById('body')

tablaMultiplicacion(body, 5)