let palabra;
let errores = 0
let aciertos = 0
id('resultado').innerHTML = ""


const palabras = ['blobolilla', 'granny', 'cannolo', 'arancina', 'zelda', 'riomare', 'snoopy', 'ciambella', 'vatastala']

const btn = id('jugar')
const img = id('img_palo')
const btn_letras = document.querySelectorAll('#letras button')

/* START */
btn.addEventListener('click', iniciar)


function iniciar(){
    img.src = 'img/ahorcado_00.png'
    btn.disabled = true
    errores = 0
    aciertos = 0

    id('resultado').innerHTML = ""

    const parrafo = id('palabra_a_adivinar')
    parrafo.innerHTML = "";

    const max_palabras = palabras.length
    const min_palabras = 0
    const dif_valores = max_palabras - min_palabras
    const palabra_random = Math.floor(Math.random() * dif_valores) + min_palabras


    palabra = palabras[palabra_random]

    const letras_palabra = palabra.length

    for(let i = 0; i < btn_letras.length; i++){
        btn_letras[i].disabled = false
    }

    for(let i = 0; i < letras_palabra; i++){
        const span = document.createElement('span')
        parrafo.appendChild(span)
    }

    console.log(palabra)
}

/* ADIVINAR LETRA */

for(let i = 0; i < btn_letras.length; i++){
    btn_letras[i].addEventListener('click', click_letras)
}

function click_letras(event){
    const spans = document.querySelectorAll('#palabra_a_adivinar span')
    const button = event.target
    button.disabled = true

    const letra = button.innerHTML

    let acierto = false
    for( let i = 0; i < palabra.length; i++){
        if( letra == palabra[i]){
            spans[i].innerHTML = letra
            aciertos++
            acierto = true
        }
    }

    if( acierto == false){
        errores++
        const img_error = `img/ahorcado_0${errores}.png`
        console.log(img_error)
        img.src = img_error
    }
    if(errores == 7){
        id('resultado').innerHTML = "Hai perso, la parola era " + palabra
        game_over()
    } else if (aciertos == palabra.length){
        id('resultado').innerHTML = "Ma sei briaviooeee!"
        game_over()
    }
    console.log(acierto)
}

/* GAME OVER */
function game_over(){
    for(let i = 0; i < btn_letras.length; i++){
        btn_letras[i].disabled = true
    }

    btn.disabled = false
}

game_over()