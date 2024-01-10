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
const alertaNum = document.querySelector("#alertaNum")
const alertaName = document.querySelector("#alertNome")
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const mes = frm.mes.value
    const ano = frm.year.value
    const numSegurança = frm.formCVC.value
    const numCard = frm.cardNumber.value
    const nome = frm.formNome.value
    if (mes.length == 0) {
        frm.mes.style.border = "solid 1px red"
        alerta.innerHTML = "Can't be blank"
    } else {
        frm.mes.style.border = ""
        alerta.innerHTML = "&nbsp;"
    }

    if (numSegurança.length == 0) {
        frm.formCVC.style.border = "solid 1px red"
        alertaCvc.innerHTML = "Can't be blank"
    } else {
        frm.formCVC.style.border = ""
        alertaCvc.innerHTML = "&nbsp;"
    }


    if (ano.length == 0) {
        frm.year.style.border = "solid 1px red"
        alertaY.innerHTML = "Can't be blank"
    } else {
        frm.year.style.border = ""
        alertaY.innerHTML = "&nbsp;"
    }

    if (numCard.length == 0) {
        frm.cardNumber.style.border = "solid 1px red"
        alertaNum.innerHTML = "Wrong format, number only"
    } else {
        frm.cardNumber.style.border = ""
        alertaNum.innerHTML = "&nbsp;"
    }

    if (nome.length == 0) {
        frm.formNome.style.border = "solid 1px red"
        alertaName.innerHTML = "Can't be blank"
    } else {
        frm.formNome.style.border = ""
        alertaName.innerHTML = "&nbsp;"
    }
})