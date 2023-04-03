const inputs = document.querySelectorAll('.inputs')
const labels = document.querySelectorAll('.labels')
const required = document.querySelectorAll('.required')
const botao = document.querySelector('.btn')

let dataAtual = new Date() 
let ano = dataAtual.getFullYear()
let mes = dataAtual.getMonth()
let dia = dataAtual.getDate()
console.log(dia, ano)

let spanAno = document.querySelector('.span-Ano')
let spanMes = document.querySelector('.span-Mes')
let spanDia = document.querySelector('.span-Dia')

function setErro(index) {
    labels[index].style.color = 'red'
    inputs[index].style.border = '2px solid red'
    required[index].style.display = 'block'
}

function removeErro(index) {
    labels[index].style.color = 'hsl(0, 1%, 44%)'
    inputs[index].style.border = '2px solid hsl(0, 0%, 86%)'
    required[index].style.display = 'none'
}

function validarDay() {
    if(inputs[0].value.length > 2 || inputs[0].value.length == '' || inputs[0].value < 1 || inputs[0].value > 31) {
        setErro(0)
    } else {
        removeErro(0)
    }
}

function validarMounth() {
    if(inputs[1].value.length > 2 || inputs[1].value > 12 || inputs[1].value < 1 || inputs[1].value == '') {
        setErro(1)
    } else {
        removeErro(1)
    }
}

function validarYear() {
    if(inputs[2].value.length > 4 || inputs[2].value.length == '' || inputs[2].value.length < 4 || inputs[2].value > 2023 || inputs[2].value < 1900) {
        setErro(2)
    } else {
        removeErro(2)
    }
}


function contaIdade() {
    let resDia = (30 - inputs[0].value) + dia
    let resAno = ano - inputs[2].value
    let resMes = (12 - inputs[1].value) + mes

    spanAno.innerHTML = resAno
    spanMes.innerHTML = resMes
    spanDia.innerHTML = resDia
}

function calcularIdade() {
    validarDay()
    validarMounth()
    validarYear()
}

/*
function validarEnvio() {
    if(inputs[0].value && inputs[1].value && inputs[2].value) {
        botao.disabled = false
        contaIdade()
    } 
    botao.disabled = true
}
*/

function validarEnvio() {
    if((inputs[0].value > 0 && inputs[0].value <= 31) && (inputs[1].value > 0 && inputs[1].value <= 12) && (inputs[2].value > 1900 && inputs[2].value <= 2023)) {
        botao.disabled = false
        contaIdade()
    } 
    botao.disabled = true
}

botao.addEventListener('click', calcularIdade)

