// MENU DE SISTEMA
// windows + . = mostra tela de emojis

let prompt= require("prompt-sync")()

let nome = ""
let idade = 0
let ativo = false
let ativoSim 



main()

function main(){

    console.clear()

    console.log("-----SISTEMA RENAZITO-----")
    console.log("1 - 📝 Cadastrar")
    console.log("2 - 👥 listar usuários")
    console.log("3 - ㊙ Sair")
    
    let opcao = prompt("Digite uma opção: ")    
    
    if(opcao == "1"){
        cadastrar()
        main()
    }else if ( opcao == "2" ){
        listar()
    }else if ( opcao == "3" ){
        return
    }else{
        console.log("OPCÃO INVÁLIDA!")//setTimeout = escrever minusculo | colocar o tempo e colocar oque quer que aconteça dentro da function
        setTimeout(() => {
            main()
        }, 1000);
    }
}

function cadastrar(){
    console.log("-----CADASTRO----")
    nome = prompt("Digite o Nome: ")
    idade = parseInt(prompt("Digite a idade: "))
    ativo = true
    if(ativo == true){    
        ativoSim = "sim"
    }else{
        ativoSim = "Não"
    }
    
}

function listar(){
    if(ativo == false){
        console.log("Não existe cadastros ativos")
        setTimeout(() => {
            main()
        }, 1000);

    }else{
        console.clear()
        console.log("----LISTAGEM-----")
        console.log("1 - Nome: [" + nome + "] | Idade: [" + idade + "] | Ativo: [" + ativoSim + "] " )
        prompt("Pressione enter para continuar...")
        main()
    }
    return

}

// function sair(){
//     console.log("-----SAIDO-----")
// }

// interpolaçao
// console.log(`1 - nome [${nome}] idade: [${idade}] e status: [${ativo}]`)









































