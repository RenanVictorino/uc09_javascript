let prompt = require("prompt-sync")()

let usuarios = [
    { id: 1, nome: "Chaves", idade:8 },
    { id: 2, nome: "Quico", idade:10 },
    { id: 3, nome: "Seu Madruga", idade:44 },
    { id: 4, nome: "Chiquinha", idade:8 },
    { id: 5, nome: "Nhonho", idade:9 },
    { id: 6, nome: "Bruxa do 71", idade:300 }
]

let opcao_listagem, nome_busca

main()
function main(){

    console.clear()

    console.log("Opções disponíveis")
    console.log("1- Listar todos")
    console.log("2 - Buscar por nomes")
    let opcao = prompt("Digite uma opção:  ")
    if(opcao == "1"){
        listagem()
    }else if(opcao == "2"){
        nome_busca = prompt("Digite o nome: ")
    }
    
    function listagem(){
        console.log("Opções de listagem")
        console.log("1 = Ordem crescente")
        console.log("2 = Ordem decrescente") 
        opcao_listagem = prompt("Digite uma opção:  ")
    }


    if( opcao == "1" ){
        if( opcao_listagem == "1" ){
            crescente()
    
        }else if( opcao_listagem == "2" ){
            decrescente()
        }
    }else if( opcao == "2" ){
        buscaNome(nome_busca)
    }


    prompt("Aperte enter para continuar...")
    main()
  
}

function crescente(){
    for(let i=0; i < usuarios.length; i++ ){
        console.log(`ID [${i+1}] - ${usuarios[i].nome} | Idade: ${usuarios[i].idade}`)
    }
}

function decrescente(){
    for(let i=usuarios.length -1; i >= 0 ; i-- ){
        console.log(`ID [${i+1}] - ${usuarios[i].nome} | Idade: ${usuarios[i].idade}`)
    }
}

function buscaNome(nome_busca){
    for(let i=0; i < usuarios.length; i++ )
        if(usuarios[i].nome.toUpperCase().includes(nome_busca.toUpperCase())){
        console.log(`ID [${i+1}] - ${usuarios[i].nome} | Idade: ${usuarios[i].idade}`)
    }
}