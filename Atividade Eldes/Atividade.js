const produto = require(`./produtos.json`)
const venda = require(`./vendas.json`)
const vendaProdutos = require(`./vendaProdutos.json`)

// console.log(vendaProdutos)

const vendas_extendido = []

const produtos = {
    id: "",
    nome: "",
    preco: ""

}

for( let i = 0; i < produto.length; i++ )
    // console.log(produto[i].id, produto[i].nome, produto[i].preco)
produtos.push(
     {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco 
     }
)


    // produtos.push(produto[i].id, produto[i].nome, produto[i].preco)

    console.log(produtos)