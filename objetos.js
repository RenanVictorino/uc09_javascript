
console.log(produtos[2].nome+" R$ "+produtos[2].preco)

let produtos = [
    {
        id: 1,
        nome: "Taça",
        preco: 25.9,
        descricao: "Feito pra por líquido dentro"
    },
    {
        id: 2,
        nome: "Copo",
        preco: 25.9,
        descricao: "Feito pra por líquido dentro"
    },
    {
        id: 3,
        nome: "Caneca",
        preco: 25.9,
        descricao: "Feito pra por líquido dentro"
    }
]








function teste(){

    let usuario = {
        nome: "Conradito",
        idade: 15,
        telefones: ["11111122", "22222331"],
        endereco: {
            rua: "Episcopal",
            numero: "500",
            bairro: "Centro",
        }
    }
    
    usuario.idade = 21
    
    console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos`)
    console.log(`
        Telefone de contato 1: ${usuario.telefones[0]}
        e Telefone 2: ${usuario.telefones[1]}
    `)
    console.log("Ele mora no bairro: "+usuario.endereco.bairro)

}

