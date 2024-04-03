//Dom
const horas = document.querySelector ('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const diia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const texto = document.querySelector('#texto')
//Eventos
setInterval(relogio,1000)

//Função
function relogio() {

    let dia = new Date()

    let h = dia.getHours()

    let m = dia.getMinutes()

    let s = dia.getSeconds()

    let dd = dia.getDate()

    let mm = dia.getMonth() +1

    let a = dia.getFullYear()


    if(h<10){
        h="0"+h
    }

    if(m<10){
        m="0"+m
    }

    if(s<10){
        s="0"+s
    }

    if(mm < 10){
    mm = "0" + mm
    }

    if (dd < 10) {
        dd = "0" + dd
    }



    if (h >= 5 && h < 12) {
       texto.textContent = 'Bom dia ! 🌄'
    }
    else if(h >= 12 && h < 18) {
       texto.textContent = 'Boa tarde ! 🌇'
    }else {
       texto.textContent = 'Boa noite zzzz 🌆'
    }



    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
    diia.textContent = dd
    mes.textContent = mm
    ano.textContent = a


}













