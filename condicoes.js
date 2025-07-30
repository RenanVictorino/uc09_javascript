// condiçoes simples

// > maior
// < menor
// == igual
// != diferente
// >= maior ou igual
// <= menor ou igual

let prompt = require("prompt-sync")()

// let idade = parseInt(prompt("Qual sua idade? "))

// if(idade < 18){
//     console.log("Não tem idade para tirar CNH")
// }else{
//     console.log("Já pode tirar CNH")
// }

// let senha = prompt("Digite a senha do sistema: ")

// if( senha != "admin" ){
//     console.log("Senha incorreta! \nTente novamente!")
// }else{
//     console.log("Seja bem vindo!")
// }

//
//-----------------------------------------------------------------------------------
//

let kilo = 50.0, kilo_caro = 55.90, total

let peso = parseInt(prompt("Digite o peso que gostaria de levar: "))

if(peso > 100){
    total = peso*kilo_caro
    console.log("Preço por kilo: R$" + kilo_caro + 
        "\nPreço a pagar: R$" + total)
}else{
    total = peso*kilo
    console.log("Preço por kilo: R$" + kilo +
        "\nPreço a ser pago: R$" + total)
}

//
//---------------------------------------------------------------------------------
//
