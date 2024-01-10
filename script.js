const frm = document.querySelector("form")

const frmNome = document.querySelector("#formNome")
const cardNome = document.querySelector("#inNome")

const frmNumber = document.querySelector("#cardNumber")
const cardNum = document.querySelector("#inNumber")

const formMes = document.querySelector("#mes")
const cardMes = document.querySelector("#mm")

const cardYear = document.querySelector("#yy")
const formYear = document.querySelector("#year")

const cardCvc = document.querySelector("#cvc")
const formCvc = document.querySelector("#formCVC")



//Evento no campo do nome
frmNome.addEventListener("keydown", () => {
    cardNome.innerHTML = frmNome.value
})

frmNome.addEventListener("keyup", () => {
    cardNome.innerHTML = frmNome.value
})
//Evento no campo do número do cartão

frmNumber.addEventListener("keydown", () => {
    cardNum.innerHTML = frmNumber.value
})

//Evento no campo do mês

formMes.addEventListener("keydown", () => {
    cardMes.innerHTML = formMes.value
})

formMes.addEventListener("keyup", () => {
    cardMes.innerHTML = formMes.value
})

//Evento no campo do ano

formYear.addEventListener("keydown", () => {
    cardYear.innerHTML = formYear.value
})

formYear.addEventListener("keyup", () => {
    cardYear.innerHTML = formYear.value
})

//Evento no campo do cvc

formCvc.addEventListener("keydown", () => {
    cardCvc.innerHTML = formCvc.value
})

formCvc.addEventListener("keyup", () => {
    cardCvc.innerHTML = formCvc.value
})

//Evemtp de alerta quando o campo está vazio
const alerta = document.querySelector(".alert")
const alertaCvc = document.querySelector(".alertCvc")
const alertaY = document.querySelector(".alertY")
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const mes = frm.mes.value
    const ano = frm.year.value
    const numSegurança = frm.formCVC.value
    if (mes.length == 0) {
        frm.mes.style.border = "solid 1px red"
        alerta.innerHTML = "Can't be black"
    }
    if(numSegurança.length == 0){
        frm.formCVC.style.border = "solid 1px red"
        alertaCvc.innerHTML = "Can't be black"
    }
    if(ano.length == 0){
        frm.year.style.border = "solid 1px red"
        alertaY.innerHTML = "Can't be black"
    }
})