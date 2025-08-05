let prompt = require("prompt-sync")()
// Vetores (ou ARRAYs): guardar vários dados em uma só variável

//           id|idade   id|idade  id|idade       id|idade    id|idade   id|idade
//            1   8      2  10     3   44         4   8       5   9      6  300                                                           
// let nomes = ["Chaves", "Quico", "Seu Madruga", "Chiquinha", "Nhonho", "Bruxa do 71"]

let nomes = [
    {
        id: 1,
        nome: "Chaves",
        idade: 8
    },
    {
        id: 2,
        nome: "Quico",
        idade: 10
    },
    {
        id: 3,
        nome: "Seu Madruga",
        idade: 44
    },
    {
        id: 4,
        nome: "Chiquinha",
        idade: 8
    },
    {
        id: 5,
        nome: "Nhonho",
        idade: 9
    },
    {
        id: 6,
        nome: "Bruxa do 71",
        idade: 300
    },
]


/*
main()
function main(){

    console.clear()

    let opcao = prompt("Digite 1 para cadastrar, 2 para listar, 3 para buscar: ")
    if(opcao == "1"){

        let nome = prompt("Digite um nome: ")
        nomes.push(nome)
        main()
        
    }else if( opcao == "2" ){

        for(let i = 0; i < nomes.length; i++){
            console.log(`${i+1} - ${nomes[i]}`)
        }

        prompt("Aperter ENTER para continuar")
        main()

    }else if(opcao == "3"){

        let posicao = prompt("Digite a posição do usuário que quer buscar:")

        if( nomes.length >= posicao ){
            console.log(`O usuário é: ${nomes[posicao-1]}`)
            alterar(posicao-1)
        }else{
            console.log(`Não existe um usuário nesta posição`)
        }

    }

}

function alterar( indice ){
    let novo_nome = prompt("Digite o novo nome: ")
    nomes[indice] = novo_nome
    
    console.log("Nome alterado com xuxesso!")
    setTimeout(() => {
        main()
    }, 1000);
}

function teste(){
    let nomes = [ "Jailson", "Mendes", "Laranja" ]
    console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${nomes[2]}`)
    
    nomes[0] = "Ricardo"
    nomes[1] = "Milos"
    console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${nomes[2]}`)
    
    nomes.push("Doce") // Adiciona um item no final do array
    console.log(`O usuário ${nomes[0]} ${nomes[1]} toma suco de ${nomes[2]} ${nomes[3]}`)
}
*/