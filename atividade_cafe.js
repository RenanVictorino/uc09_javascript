let nome_conrado = "Conrado",cafe_conrado = 187, idade_conrado = 15, cliente_conrado = "false"
let nome_pedrita = "Pedrita",cafe_pedrita = 5, idade_pedrita = 19, cliente_pedrita = "true"
let total_cafes = cafe_conrado + cafe_pedrita
let falta_200_conrado = 200 - cafe_conrado 
let falta_200_pedrita = 200 - cafe_pedrita
let nova_venda_conrado, nova_venda_pedrita
nova_venda_conrado = cafe_conrado + 15
nova_venda_pedrita = cafe_pedrita + 3
let preco_cafe = 3.50
let total_gasto_conrado = cafe_conrado*3.50
let total_gasto_pedrita = cafe_pedrita*3.50
let desconto_conrado = total_gasto_conrado/2
let desconto_pedrita = total_gasto_pedrita/2


console.log("Olá!\n" +
    "Bem-vindo ao sistema de usuários do Conradito\nAbaixo estão as informações dos usuários cadastrados no sistema:" +
"\n\n----Lista de usuários:" + 
"\n1-Nome: " + nome_conrado + ", idade: " + idade_conrado + ". É cliente: " + cliente_conrado +
"\n2-Nome: " + nome_pedrita + ", idade: " + idade_pedrita + ". É cliente: " + cliente_pedrita +
"\n\n----Quantidade de cafés: " + 
"\nO cliente " + cliente_conrado + " já tomou " + cafe_conrado + " cafés!" + 
"\nO cliente " + cliente_pedrita + " já tomou " + cafe_pedrita + " cafés!" + 
"\n\n----Soma de cafés tomados: " + 
"\nJuntos, os clientes " + nome_conrado + " e " + nome_pedrita + " tomaram " + total_cafes + " cafés!" + 
"\n\n----Quantos cafés falta para chegar em 200?" + 
"\nFaltam " + falta_200_conrado + " para " + nome_conrado +
"\nFaltam " + falta_200_pedrita + " para " + nome_pedrita +
"\n\n\n----Quantidade de cafés: " + 
"\nO cliente " + nome_conrado + " já tomou " + nova_venda_conrado + " cafés!" + 
"\nO cliente " + nome_pedrita + " já tomou " + nova_venda_pedrita + " cafés!"+
"\n\n\n----Total desembolsado por cada cliente: \n" + 
"1-Nome: " + nome_conrado + " gastou: R$" + total_gasto_conrado + 
"\n2-Nome: " + nome_pedrita + " gastou: R$" + total_gasto_pedrita+
"\n\n\n----Total de Desconto cada cliente teria com 50%\n" + 
"1-Nome: " + nome_conrado + ", teria gasto: R$" + desconto_conrado +
"\n2-Nome: " + nome_pedrita + ", teria gasto: R$" + desconto_pedrita)