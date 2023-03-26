/* criando variaveis para pegar o meu input e o meu botão do html*/

let input = document.getElementById("input-principal")
let button = document.getElementById("butao-adicionar")
let lista = document.getElementById("tarefas")

let arraydetarefas = []



/* estrutura para uma função criei uma função para  pegar o valor do meu input*/
function cliqueinobotao() {
    /* o push o que tiver dentro do push ele joga dentro  do array*/
    arraydetarefas.push(input.value)
    mostrarnatela()


}

function mostrarnatela() {

    let novalista = " "

    arraydetarefas.forEach(tarefa => {

        novalista = novalista + ` 
         <li class="linha1" >
            <p>${tarefa}</p> 

         </li >

         `


    })

    lista.innerHTML = novalista
}


/* criei um evento para o clique do meu botão*/
button.addEventListener("click", cliqueinobotao)




