'use strict'

function removerClasses (){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('cinco', 'cincoDez', 'dez')
}

function calcularDesconto(){
    const numero = Number(document.getElementById('numero').value)
    const desconto = Number(document.getElementById('desconto').value)
    
    const resultado = document.getElementById('resultado')

    let calculo = desconto / 100 * numero
    let restante = numero - calculo

    const texto = `Desconto: R$ ${calculo.toFixed(2)} | Total: R$ ${restante.toFixed(2)}`
    
    removerClasses()
    
    if(desconto <= 5){
        resultado.classList.add('cinco')
    } else if(desconto > 5 && desconto <= 10) {
        resultado.classList.add('cincoDez')
    } else{
        resultado.classList.add('dez')
    }

    resultado.textContent = texto
}