console.log('start')

const btn_bales = document.getElementById('btn_bales')
const btn_tire = document.getElementById('btn_tire')
const text_nb_bales = document.getElementById('nb_bales')
const text_bales_restant = document.getElementById('text_bales_restant')
const text_qui_joue = document.getElementById('qui_joue')

var nb_bales_restant;
var nb_tire = 0;
var chargeur = [];
var life = true
var shoot;
btn_tire.disabled = true

function restartGame(){
    text_nb_bales.disabled = false
    btn_bales.disabled = false
    btn_tire.disabled = true
    nb_bales_restant = 0
    chargeur = [];
    nb_tire = -1;
    shoot = ""
}

function startGame(){
    life = true
    nb_bales_restant = text_nb_bales.value
    console.log(nb_bales_restant)
    text_nb_bales.disabled = true
    btn_bales.disabled = true
    btn_tire.disabled = false
    refreshText()
    load_chargeur()
}


function refreshText(){
    text_bales_restant.innerHTML = nb_bales_restant
    if(life){
        text_qui_joue.innerHTML = "C'est au suivant"
    }else{
        text_qui_joue.innerHTML = "Tu est mort"
    }
}

function load_chargeur(){
    for (let i = 0; i < nb_bales_restant; i++) {
        console.log(i)
        chargeur.push("v")
    }
    console.log(chargeur)
    x = Math.floor(Math.random() * nb_bales_restant)
    console.log(x)
    chargeur[x] = "b"
    console.log(chargeur)
}


function tirer(){
    console.log('nb tire = ', nb_tire)
    shoot = chargeur[nb_tire]
    if (shoot == "b") {
        console.log('mort')
        life = false
        btn_tire.disabled = true
        restartGame()
    }else{
        console.log(nb_tire)
    }
    nb_bales_restant--
    nb_tire++
    refreshText()
}