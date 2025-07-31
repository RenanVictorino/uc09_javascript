let prompt = require("prompt-sync")()

// Operador E e operador OU nas condições

function exemploPagamento(){
    
    let pagamento = prompt("Selecione: crédito, débito, pix ou dinheiro")

    if( pagamento == "crédito"){
        console.log("Você selecionou o crédito")
    }else if ( pagamento == "débito" ){
        console.log("Você selecionou o débito")
    }else if ( pagamento == "pix" ){
        console.log("Você selecionou o pix")
    }else if ( pagamento == "dinheiro" ){
        console.log("Você selecionou o dinheiro")
    }else{
        console.log("FORMA DE PAGAMENTO NÃO DISPONÍVEL!")
    }
}

// cnh()
function cnh(){

    let idade = prompt("Digite sua idade: ") 

    if(isNaN(idade) == true){
        console.log("Digita um numero ae VACILÃO")
        return
    }

    if( idade >=120 ){
        console.log("Idade inválida...")
    }else if ( idade > 65 ){
        console.log("Teste especial para renovar CNH")
    }else if( idade > 17 ){
        console.log("Você ja pode tirar CNH")
    }else{
        console.log("Você ainda não tem idade para tirar CNH")
    }
}

// login()
function login(){
    let usuario = prompt("Digite seu usuário: ")
    let senha = prompt("Digite sua senha: ")

    if ( usuario == "admin"  && senha == "123" ){
        console.log("Acesso concedido!")
    }else{
        console.log("Usuário ou senha incorretos...")
    }
}

function exemploResposta(){
    let resposta = prompt("Deseja cadastrar o débito automático? ")

    // || UMA DAS duas condições tem que ser verdadeira

    if( resposta == "sim" || resposta == "SIM" ){
        console.log("Débito cadastrado com sucesso!")
    }else{
        console.log("Não será cadastrado...")
    }
}

jogo()
function jogo(){
    
    let time1 = prompt("Qual nome do primeiro time: ")
    let time2 = prompt("Qual nome do segundo time: ")
    let numero_gol_1 = parseInt(prompt("Quantos gols o " + time1 + " marcou? " ))
    let numero_gol_2 = parseInt(prompt("Quantos gols o " + time2 + " marcou? "))

    if (numero_gol_1 == numero_gol_2){
        console.log("EMPATE")
    }else if (numero_gol_1 > numero_gol_2){
        console.log(time1 + " ganhou!")
    }else{
        console.log(time2 + " ganhou!")
    }


}