let prompt = require("prompt-sync")()

let telefonou = prompt("Telefonou para a vítima? 1) Sim | 2) Não: ")
let local = prompt("Esteve no local do crime? 1) Sim | 2) Não: ")
let perto = prompt("Mora perto da vítima? 1) Sim | 2) Não: ")
let devia = prompt("Devia para a vítima? 1) Sim | 2) Não: ")
let trabalhou = prompt("Já trabalhou com a vítima? 1) Sim | 2) Não: ")

let pontuacao = 0

if (telefonou == "1"){
    pontuacao ++
}
if(local == "1"){
    pontuacao ++
}
if(perto == "1"){
    pontuacao ++
}
if(devia == "1"){
    pontuacao ++
}
if(trabalhou == "1"){
    pontuacao ++
}
// console.log(pontuacao)

if ( pontuacao >= 5){
    console.log("ASSA SINO")
}else if(pontuacao == 3 || pontuacao == 4){
    console.log("Cúmplice")
}else if(pontuacao == 2){
    console.log("Suspeito")
}else{
    console.log("INOCENTE")
}

