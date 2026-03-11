'use strict'

function removerClasses (){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado')
}

function calcularMedia(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const numero3 = Number(document.getElementById('numero3').value)
    const resultado = document.getElementById('resultado')
 
    let calculo = (numero1 + numero2 + numero3) / 3
    let situacao = ""
    
    removerClasses ()

    if (calculo >= 7) {
    
    situacao = "aprovado"
    resultado.classList.add('aprovado')
    
    } else if (calculo >= 5) {
    
    situacao = "em recuperação"
    resultado.classList.add('recuperacao')

    } else {
    
    situacao = "reprovado"
    resultado.classList.add('reprovado')
    }

    resultado.textContent = `O aluno tirou: ${calculo.toFixed(2)} | O aluno está ${situacao}`
}