let prompt = require("prompt-sync")()

let nomes = [];

main()
function main(){
    let opcao = prompt("Digite 1 para cadastrar ou 2 para listar: ")
    if(opcao == "1"){
        let nome = prompt("Digite um nome: ")
        nomes.push(nome) 
        main()

    }else if(opcao == "2"){
        
        for(let i = 0; i < nomes.length; i++){ // nomes.length = percorre o corrimento da array
            console.log(`${i+1} - ${nomes[i]}`)
            
        }
        main()

    }else if( opcao == "3"){
        let posicao = prompt("Digite a posição do usuário que quer buscar: ")
            posicao--

        if(nomes.length >= posicao){
            console.log(`${nomes[posicao]}`)
            prompt("Aperte Enter para continuar...")
            main()
        }else{
            console.log(`Não existe um usuário nesta posição`)
        }
    }

}















function teste(){
    
    // Vetores (ou ARRAYs): guardar vários dados em uma só variável
    
    //                0         1          2
    let nomes = [ "Jailson", "Meldes", "Laranja" ]
    
    // console.log(nomes)
    
    //            3
    nomes.push("renan") // push adiciona um item ao final do array
    
    // console.log(nomes[3])
    console.log(nomes[0])
    
    
    nomes[0] = "Ricardo"
    nomes[1] = "Milos"
    
    console.log(`O usuario ${nomes[0]} ${nomes[1]} toma suco de ${nomes[2]} ${nomes[3]}`)

}