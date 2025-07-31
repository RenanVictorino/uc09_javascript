let prompt = require("prompt-sync")()

// let numero = prompt("Digite um número: ")

// if(numero > 0 ){
//     console.log("Positivo")
// }else{
//     console.log("Negativo")
// }

//
//--------------------------------------------------------------------------------------
//

let valor_compra = parseInt(prompt("Qual o valor da compra? "))
let forma_pagamento = prompt("Digite 1 para Credito\nDigite 2 para Debito? ")
let credito = (valor_compra *.05) + valor_compra
let debito = valor_compra - (valor_compra*.1) 

if ( forma_pagamento == 1){
    console.log("O valor da compra é " + credito)
}
if( forma_pagamento == 2){
    console.log("o valor da compra é " + debito)
}

//
//--------------------------------------------------------------------------------------
//

