const frm = document.querySelector("form")

const frmNome = document.querySelector("#formNome")
const cardNome = document.querySelector("#inNome") 

frmNome.addEventListener("keydown", () =>{
    cardNome.innerHTML = frmNome.value
})

frmNome.addEventListener("keyup", () =>{
    cardNome.innerHTML = frmNome.value
})

const frmNumber = document.querySelector("#cardNumber")
let cardNum = document.querySelector("#inNumber")

frmNumber.addEventListener("keydown", () =>{
    cardNum.innerHTML = frmNumber.value
})

 frmNumber.addEventListener("keyup", () =>{
     cardNum.innerHTML = frmNumber.value
     const inputValue = frmNumber.value.replace(/\s/g, ''); // Remove espaços em branco existentes
    let formattedValue = '';

    for (let i = 0; i < inputValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' '; // Adiciona um espaço a cada quatro caracteres
        }
        formattedValue += inputValue[i];
    }

    cardNum.innerHTML = formattedValue; 
   
}) 

const formMes = document.querySelector("#mes")
const cardMes = document.querySelector("#mm")

formMes.addEventListener("keydown", () =>{
    cardMes.innerHTML = formMes.value
})

formMes.addEventListener("keyup", () =>{
    cardMes.innerHTML = formMes.value
})

const cardYear = document.querySelector("#yy")
const formYear = document.querySelector("#year")

formYear.addEventListener("keydown", () =>{
    cardYear.innerHTML = formYear.value
})

formYear.addEventListener("keyup", () =>{
    cardYear.innerHTML = formYear.value
})

const cardCvc = document.querySelector("#cvc")
const formCvc = document.querySelector("#formCVC")

formCvc.addEventListener("keydown", () =>{
    cardCvc.innerHTML = formCvc.value
})

formCvc.addEventListener("keyup", () =>{
    cardCvc.innerHTML = formCvc.value
})


