let prompt = require("prompt-sync")()

/*
Entrada e saída simples
Solicite ao usuário seu nome e idade. Depois, exiba: Olá, [nome]! Você tem [idade] anos.
Decisão
Leia um número e exiba "Par" se for par e "Ímpar" se for ímpar.
Repetição
Exiba todos os números de 1 a 10 usando um for.
Array
Dado o array let numeros = [5, 8, 12];, calcule e exiba a soma dos valores.
Objeto
Crie um objeto que represente um aluno com as propriedades nome, idade e curso. Exiba no console apenas o nome e o curso.
*/


// solicitacao()
function solicitacao(){
    let nome = prompt("Qual seu nome: ")
    let idade = prompt("Qual sua idade: ")

    console.log(`Olá, [${nome}]! Você tem [${idade}] anos.`)
}

// imparOuPar()
function imparOuPar(){
    let numero = parseInt(prompt("Digite um número: "))
    if(numero % 2 == 0 )
        console.log(`O numero ${numero} é Par!`)
    else{
        console.log(`O numero ${numero} é Impar!`)
    }
}

// exibicao()
function exibicao(){

    for ( let i =1; i < 11; i++){
        console.log(i)
    }
}

// somaArray()
function somaArray(){
    let numeros = [5, 8, 12]
    numeros = numeros[0] + numeros[1] + numeros[2]
    console.log(numeros)
}

// objeto()
function objeto(){
    let aluno = {
        nome: "Renan",
        idade: 31,
        curso: "Programador de Sistemas"
    }

    console.log(`Nome: ${aluno.nome}\nCurso: ${aluno.curso}`)
}

haha()
function haha(){
    let numeros = [5, 8, 12]
    total = 0
    for (let i = 0; i < numeros.length; i++)
        total += numeros[i]
    console.log(total)
}