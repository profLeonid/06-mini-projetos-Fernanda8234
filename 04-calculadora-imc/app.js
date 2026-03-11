'use strict'

function removerClasses (){
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('abaixo', 'normal', 'sobrepeso', 'obesidade1', 'obesidade2', 'obesidade3')
}

function calcularIMC(){

    const altura = Number(document.getElementById('altura').value)
    const peso = Number(document.getElementById('peso').value)
    const resultado = document.getElementById('resultado')

    let m = peso / (altura * altura)
    let faixaPeso = ''
    
    removerClasses ()

    if(m < 18.5){
        faixaPeso = 'Abaixo do peso'
        resultado.classList.add('abaixo')
    } else if(m <= 24.9){ 
        faixaPeso = 'Peso normal'
        resultado.classList.add('normal')
    } else if(m <= 29.9){
        faixaPeso = 'Sobrepeso'
        resultado.classList.add('sobrepeso')
    } else if(m <= 34.9){
        faixaPeso = 'Obesidade I'
        resultado.classList.add('obesidade1')
    } else if(m <= 39.9){
        faixaPeso = 'Obesidade II'
        resultado.classList.add('obesidade2')
    } else if(m >= 40){
        faixaPeso = 'Obesidade III'
        resultado.classList.add('obesidade3')
    }

    resultado.textContent = `Seu IMC é: ${m.toFixed(2)} | Você está na faixa de: ${faixaPeso}`
}