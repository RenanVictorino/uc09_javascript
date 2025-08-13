/*
EduSystem Escolar
Você será o encarregado por criar um sistema para uma escola, chamado 
EduSystem.

A seguir está a solicitação do seu cliente:
“
Eu gostaria de um sistema que eu pudesse ter mais controle sobre os nossos 
alunos e que os funcionários pudessem fazer a gestão dessas turmas.
Basicamente o que eu preciso, é que os funcionários pudessem cadastrar e 
buscar os alunos e as turmas e consultar quem são eles. As vezes a gente 
também muda informações de alguns alunos e das turmas, seria bom se 
pudéssemos fazer isso. Vale lembrar que não queremos ver no sistema as 
turmas que já formaram, apenas as atuais.
Ah e quase esqueci, é importante que somente eu como administrador 
pudesse fazer o fechamento das turmas, nenhum outro funcionário pode fazer 
isso. A recepcionista pode gerenciar os dados dos alunos e ver as turmas, mas 
somente a diretora pode criar turmas novas.
Agora são 14h, e como você é um bom profissional e eu acredito no seu
potencial, acho que até às 17:30h você consiga me entregar tudo pronto e 
funcionando. Sem pressão, claro. Obrigado!
*/


let prompt = require("prompt-sync")()

let professores = [
    {id: 1, nome: "Marcius", senha: "444", ativo: false},
    {id: 2, nome: "Conrado", senha: "555", ativo: false},
    {id: 3, nome: "Pedro", senha: "666", ativo: false}
]

let usuarios =[
    {id: 1, nome: "Admin", senha: "adm", ativo: true, permissao: "admin"},
    {id: 2, nome: "Diretora", senha: "dir", ativo: true, permissao: "diretoria"},
    {id: 3, nome: "Recepcionista", senha: "rec", ativo: true, permissao: "recepcionista"}
]

let alunos = [
    {id: 1, nome: "Renan", idade: 14, ativo: false},
    {id: 2, nome: "Juliana", idade: 15, ativo: false},
    {id: 3, nome: "Fabricio", idade: 14, ativo: false},
    {id: 4, nome: "Lorena", idade: 15, ativo: false},
    {id: 5, nome: "Eduardo", idade: 14, ativo: false},
    {id: 6, nome: "Marcos", idade: 15, ativo: false},
    {id: 7, nome: "Maria", idade: 14, ativo: false},
    {id: 8, nome: "Madalena", idade: 15, ativo: false},
    {id: 9, nome: "João", idade: 14, ativo: false},
    {id: 10, nome: "Leonardo", idade: 15, ativo: false},
    {id: 11, nome: "Murilo", idade: 14, ativo: false},
    {id: 12, nome: "Maysa", idade: 15, ativo: false},
]


let usuario = null

main()
function main(){

    console.clear

    if(usuario == null){
        autenticar()
        return
    }

    console.log("---- EDU SYSTEM ----")
    console.log("Opções disponíveis:")
    console.log("[1] - Cadastrar Alunos")
    console.log("[2] - Buscar Alunos")
    console.log("[3] - Editar Alunos")
    console.log("[4] - Buscar Turmas")
    console.log("[5] - Editar Turmas")
    console.log("[6] - Cadastrar Usuarios")
    console.log("[7] - Editar Usuarios")
    console.log("[8] - Cadastrar Professores")
    console.log("[9] - Editar Professores")
    console.log("[10] - Sair")
    let opcao = prompt("Digite uma opção ")

    if( opcao == "1" ){
        cadastrarAlunos()
    }else if(opcao == "2"){
        buscarAlunos()
    }else if(opcao == "3"){
        editarAlunos()
    }else if(opcao == "4"){
        buscarTurmas()
    }else if(opcao == "5"){
        editarTurmas()
    }else if(opcao == "6"){
        cadastrarUsuarios()
    }else if(opcao == "7"){
        editarUsuarios()
    }else if(opcao == "8"){
        cadastrarProfessores()
    }else if(opcao == "9"){
        editarProfessores()
    }else if(opcao == "10"){
        deslogar()
    }
}

function autenticar(){

    console.log("---- 🔐 LOGIN DE USUÁRIOS ----")
    var nome = prompt("🪪 Digite o nome: ")
    var senha = prompt("🔑 Digite a senha: ")

    usuario = null;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nome === nome && usuarios[i].senha === senha && usuarios[i].ativo == true) {
            usuario = usuarios[i];
            // console.log(usuario)
            return main()
        }
    }
    if (usuario == null) {
        console.clear()
        console.log("Usuário ou senha incorretos.")
        setTimeout(() => {
            main()

        }, 1500);
        return main()
    }
}

function cadastrarAlunos(){

}

function cadastrarUsuarios(){

}

function cadastrarProfessores(){

}

function buscarAlunos(){

}

function buscarTurmas(){

}

function editarAlunos(){
    
    console.clear
   
    if (usuario.permissao == "recepcionista"){
        
        console.log("Alteração ALunos")
        console.log("[1] - Alterar Nome")
        console.log("[2] - Alterar Idade")
        console.log("[3] - Ativo")
        console.log("[4] - Não Ativo")
        console.log("[5] - Voltar para o Inicio")
        let alteracao = prompt("Digite a opção para alterar")
    
        if(alteracao == "1"){
            let id_procurado = parseInt(prompt("Qual o id da troca: "))
            novo_nome = prompt("Digite o novo nome: ")
            alunos[id_procurado].nome == novo_nome
        }else if(alteracao == "2"){
            let id_procurado = parseInt(prompt("Qual o id da troca: "))
            nova_idade = prompt("Digite a nova idade: ")
            alunos[id_procurado].nome == novo_nome
        }else if(alteracao == "3"){
            console.clear
            let id_procurado = parseInt(prompt("Qual o id da troca: "))
            novo_ativo = true
            alunos[id_procurado-1].ativo == novo_ativo
            
            console.log(`[${alunos[1].id}] - ${alunos[1].nome} - ${alunos[1].ativo}`)
            prompt("ddd")
            
        }else if(alteracao == "4"){
            let id_procurado = parseInt(prompt("Qual o id da troca:"))
            novo_ativo = false
            alunos[id_procurado].nome == novo_nome
        }else if(alteracao == "5"){
            main()
        }console.log("alterado feita com sucesso!")
        setTimeout(() => {
            main()
        }, 1000);
    }else{
        console.clear()
        console.log("Você não tem permissão para acessar esse sistema!")
        prompt("\nAperte ENTER para retornar para o menu inicial")
        main()
    }

}

function editarTurmas(){

}

function editarUsuarios(){

}

function editarProfessores(){

}

function alterar( indice ){
    let novo_nome = prompt("Digite o novo nome: ")
    usuarios[indice].nome = novo_nome
    
    console.log("Nome alterado com xuxesso!")
    setTimeout(() => {
        main()
    }, 1000);
}







function editarTurmas(){

}
function editarProfessores(){

}
function editarUsuarios(){

}
function deslogar(){

    console.log("----  VOCÊ FOI DESLOGADO! ----")

    usuario = null

    setTimeout(() => {
        main()
    }, 1500);

}