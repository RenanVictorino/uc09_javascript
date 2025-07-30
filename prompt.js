// Permitir o input do usuário JS
// ctrl + l = limpa terminal

let prompt = require("prompt-sync")();
let moment = require("moment");

// atividadeNome()
function atividadeNome(){
    
    
    let nome = prompt("Digite o seu nome: ");
    let sobrenome = prompt("Digite o seu sobrenome: ");
    let nome_completo = nome + " " + sobrenome;
    console.log("Seja bem vindo(a) " + nome_completo);
}

// atividadeIdade()
function atividadeIdade(){
    let idade = parseInt(prompt("Digite sua idade: "))
    let idade_futura = idade + 5
    console.log("Daqui 5 anos você terá: " + idade_futura)
    
}

// anoNascimento()
function anoNascimento(){
    let ano_nascimento = parseInt(prompt("Digite o ano de Nascimento: "))
    const ano_atual = 2025
    let idade = ano_atual - ano_nascimento
    console.log("A idade de Fulano é: " + idade)
}

// soma()
function soma(){
    let n1 = parseInt(prompt("Digite um número: "))
    let n2 = parseInt(prompt("Digite um número: "))
    soma_n = n1+n2
    console.log("A soma dos números " + n1 + " + " + n2 + " é: " + soma_n)
    
}

// conversao()
function conversao(){
    let metros = parseInt(prompt("Digite uma distancia em metros: "))
    let km = 1000/ metros
    console.log("A distancia em km é: " + km + " km(s)")
}

// medias()
function medias(){
    let n1 = parseInt(prompt("Digite a primeira nota: "))
    let n2 = parseInt(prompt("Digite a segunda nota: "))
    let media = (n1 + n2) / 2 
    console.log("A média das duas notas é: " + media)
}

// tabuada()
function tabuada(){
    let numero_escolhido = parseInt(prompt("Digite o numero escolhido para saber a taboada: "))
    let tabuada_1 = numero_escolhido*1
    let tabuada_2 = numero_escolhido*2
    let tabuada_3 = numero_escolhido*3
    let tabuada_4 = numero_escolhido*4
    let tabuada_5 = numero_escolhido*5
    let tabuada_6 = numero_escolhido*6
    let tabuada_7 = numero_escolhido*7
    let tabuada_8 = numero_escolhido*8
    let tabuada_9 = numero_escolhido*9
    let tabuada_10 = numero_escolhido*10
    let final_tabuada = tabuada_1 + "\n" +
     tabuada_2 + "\n" + tabuada_3 + "\n" + 
     tabuada_4 + "\n" + tabuada_5 + "\n" + 
     tabuada_6 + "\n" + tabuada_7 + "\n" + 
     tabuada_8 + "\n" + tabuada_9 + "\n" + 
     tabuada_10 + "\n"
    console.log(final_tabuada)
}

// dataAmericana()
function dataAmericana(){
    let data_americana = moment().format(); 
    console.log(data_americana)
}
// dataAntigaAmericana()
function dataAntigaAmericana(){
    let data_antiga = moment().subtract(7, 'days').format();
    console.log(data_antiga)
}

// dataBrasileira()
function dataBrasileira(){
    let data_brasileira = moment().format('L');
    console.log(data_brasileira)
}

dataBrasileiraAntiga()
function dataBrasileiraAntiga(){
    let data_antiga_brasileira = moment().subtract(2, 'month').format('L');
    console.log(data_antiga_brasileira)
}
