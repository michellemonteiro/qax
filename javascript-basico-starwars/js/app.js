
console.log('Olá, JavaScript!')

var userName = 'Michelle Monteiro'

document.getElementById('user-name').innerHTML = userName

//♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️//

// ✦ VARIÁVEIS ✦ //
//Variáveis são unidades de alocação em memória para guardar informações

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedi)

//♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️//

// ✦ OPERADORES MATEMÁTICOS ✦ //

// var n1 = 7
// var n2 = 2.5

// console.log(typeof (n1))
// console.log(typeof (n2))

// var total = n1 / n2
// console.log(total)

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir

//♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️//

// ✦ OPERADORES DE COMPARAÇÃO ✦ //

// var v1 = 16
// var v2 = '5'

// var resultado = v1 >= v2
// console.log(resultado)

//comparação de valores utilizamos "=="
//comparação de tipagem utilizamos "==="
//para verficar se o valor é diferente utilizamos "!="
//para verficar se a tipagem é diferente utilizamos "!=="
//para comparar se o operador da esquerda é maior que o da direita utilizamos o "Maior que" (>)
//para comparar se o operador é maior ou igual ao da direita utilizamos o "Maior ou igual que" (>=)
//para comparar se o operador da esquerda é menor que o da direita utilizamos o "Menor que" (<)
//para comparar se o operador da esquerda é menor ou igual ao da direita utilizamos o "Menor ou igual que" (<=)

//♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️//

// ✦ FUNÇÕES ✦ //

//🤖Função sem retorno, só executa algo:
// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(5, 5)

//🤖unção com efeito colateral (alerta)
// function boasVindas(nome){
//     alert(nome + ', seja bem-vindo(a)')
// }

// boasVindas('Michelle')

//🤖Função com retorno
// function soma(n1, n2){
//     return n1 + n2
// }

// var  resultado = soma(5, 5)
// console.log (resultado)

// //🌸 O que é uma função em JavaScript?
// Uma função é um bloco de código que pode ser usado várias vezes. Pensa assim: é como uma "receita". 
// Você escreve a receita uma vez (a função) e depois pode usá-la sempre que quiser (chamando a função). 
// Isso evita repetição de código e deixa tudo mais organizado.

//Tipos de Funcões Vistas:
//🫴🏻Função sem retorno, só executa algo:
// 👉 Aqui, a função pega dois números, soma e mostra no console.
// Ela não devolve o resultado, só mostra.
// É útil quando você só precisa exibir algo, sem guardar para usar depois.

//🫴🏻Função com efeito colateral (alerta)
// 👉 Essa função recebe um nome e mostra uma mensagem na tela.
// O alert é uma ação visível pro usuário, mas de novo: não retorna nada, só faz algo.

//🫴🏻Função com retorno
// 👉 Aqui a função não mostra nada sozinha.
// Ela devolve um valor (return).
// Isso é muito poderoso, porque você pode guardar o resultado em uma variável e usar depois.
// No exemplo:
// soma(5, 5) devolve 10.
// Esse 10 é guardado em resultado.
// Depois você pode exibir, somar de novo, passar para outra função...

// 🌟 Resumindo:
// Função sem retorno: faz algo direto (ex: mostrar no console, alertar).
// Função com retorno: devolve um valor para você usar depois.
// Por que existem funções?
// Evitar repetição de código.
// Organizar melhor o programa.
// Facilitar a manutenção (se precisar mudar algo, você só muda dentro da função).
// Reutilização: você pode chamar a função em vários lugares.

//♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️//

// ✦ CONTROLE DE FLUXOS COM BDD ✦ //

//Sendo um cliente correntista do banco
//Posso sacar dinheiro em caixas eletrônicos
//Para poder comprar em lugares que não aceitam cartão de débito ou crédito

//🤖Variável inicial
//👉 O cliente tem R$1000 de saldo.
// var saldo = 1000

// //🤖Controle de fluxo dentro da função
// function saque(valor) {
//     if(valor > saldo){
//         console.log('Valor do saque superior ao saldo')  
//         //❄︎ Pergunta: o valor do saque é maior que o saldo? 
//         //❄︎ 701 > 1000 ❌ Não é maior, então esse bloco não roda.
//     }else if(valor > 700){
//         console.log('Valor do Saque é superior ao máximo permitido por operação')
//         //Pergunta: o valor do saque é maior que 700?
//         // ❄︎ 701 > 700 ✅ Sim, então roda esse bloco.
//         // ❄︎ Resultado: aparece a mensagem “Valor do saque é superior ao máximo permitido por operação”.
//         // ❄︎ Como entrou nesse bloco, o programa não executa o else final.
//     } else{   
//     saldo = saldo - valor
//     //❄︎ Esse só roda se nenhuma condição anterior for verdadeira.
//     // ❄︎ No caso, não rodou, porque já caiu no else if.
//     }

// }
// //🤖Chamada da Função
// //👉 Você pediu pra sacar R$701.
// saque(701)
// console.log (saldo)
//❄︎ Como não chegou a subtrair, o saldo continua 1000.

//Cenário 1: Saque com sucesso
//Dado que meu saldo é de mil reais
//Quando faço um saque de quinhentos reais
//Então o valor do saque dever ser deduzido do meu saldo

//Cenário 2: Saque com valor superior ao saldo
//Dado que meu saldo é de mil reais
//Quando eu faço um saque de mil e um reais
//Então não deve deduzir do meu saldo
//E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

//Cenário 3: Saque com valor máximo
//Dado que meu saldo é de mil reais
//E o valor máximo por operação é de setessentos reais
//Quando faço um saque no valor de setessentos e um reais
//Então não deve deduzir do meu saldo
//E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

// 🌸 O que é controle de fluxo?
// É a forma como o programa decide o que vai fazer em cada situação.
// Ou seja: quando você escreve código, ele não precisa seguir só uma linha reta.
// Ele pode escolher caminhos diferentes dependendo das condições (regras).
// Em JavaScript, quem faz esse papel são principalmente:
// ➡️if, else if, else → verificam condições.
// ➡️switch → outra forma de testar várias opções.
// ➡️for, while → controlam repetições (looping).
// No seu exemplo, estamos usando o if/else if/else.

// 🌟 Em resumo:
// O controle de fluxo decide qual parte do código vai rodar.
// Ele funciona como perguntas em sequência:
// Se a primeira for verdadeira, executa e ignora o resto.
// Se for falsa, passa pra próxima (else if).
// Se nenhuma condição for verdadeira, cai no else.

// 👉 Uma forma simples de visualizar:
// Se valor > saldo → mensagem “sem saldo”.
// Senão se valor > 700 → mensagem “limite por operação”.
// Senão → faz o saque.

//♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️//

// ✦ ARRAYS ✦ //
//🤖É um tipo de dado onde você consegue ter um conjunto de dados, onde você consegue armazenar informações.

// ✨ Características principais dos Arrays
// Organizam dados em uma lista.
// Cada elemento do array tem uma posição chamada índice.
// O índice começa em 0 (não em 1).
// No exemplo:
// frutas[0] → 'maçã'
// frutas[1] → 'banana'
// frutas[2] → 'uva'
// Você pode adicionar, remover, modificar valores dessa lista.

// 🌟 Onde usamos Arrays?
// Lista de produtos no carrinho de compras.
// Lista de alunos em uma turma.
// Números de sorteio de uma loteria.
// Várias mensagens em um chat.
// Ou seja, sempre que você precisa lidar com muitos dados juntos em uma única estrutura.

// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

// console.log(gaveteiro[3])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// //🤖 Adicionar itens 
// personagens.push('C3pO') 
// personagens.push('R2D2')

// //🤖 Renover o último item da lista
// personagens.pop() 

// //🤖 Ignorar um item da lista
// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// })

// //🤖 Apresentar somente um item da lista
// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// })

// console.log(personagens)

//♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️//

// ✦ CONTROLES DE REPETIÇÃO (LOOPS) ✦ //

//var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

//🤖 Loop da maneira mais simples de codar
// personagens.forEach(function(p){
//     console.log(p)
// })

//🤖 Loop da maneira mais elaborada de codar
// for (var i in personagens){
//     console.log(personagens[i])
// }

//🤖 Loop para quem é expert em programação, pois somente desenvolvedores usam essa forma de codar
// for (var i = 0; i < 10; i++) {
//     console.log(i)
//     //código vai ser executado até a condição retornar "false"
// }

//♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️//

// ✦ OBJETOS (SUPER VARIÁVEIS) ✦ //
//Objetos é uma forma muito prática de armazenamento de informações de forma flexível e agrupada onde
//consegue-se ter uma coleção de valores referenciados por nome.

//🤖 Criação do objeto
//var yoda = {
    // ❄︎ Criamos uma variável chamada yoda que guarda um objeto.
    
    // 🤖 Propriedades do objeto
    // nome: 'Mestre Yoda',
    // idade: 100,
    // jedi: true,
    // ❄︎ Essas são características do objeto (como atributos de uma ficha).

    // 🤖 Método do objeto
    // mostraIdade: function(){
    //     console.log(`A idade do ${this.nome} é: ${this.idade} anos`)
    // }
    // ❄︎ Aqui temos uma função dentro do objeto. Quando uma função está dentro de um objeto, chamamos de método.
    // this significa este objeto (no caso, yoda). Então this.nome pega 'Mestre Yoda'. E this.idade pega 100.
//}

// console.log(yoda)
// 🤖 Chamando o método
//yoda.mostraIdade()
// ❄︎ Aqui você manda o objeto executar sua própria função.

// 🌟 Em resumo:
// Objeto → guarda informações em pares (chave: valor).
// Propriedades → dados do objeto (nome, idade, jedi).
// Métodos → funções que pertencem ao objeto.
// this → referência ao próprio objeto (acessa os dados dele).

//♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️//

// ✦ CONSTANTES ✦ //
//Constante é um valor que, depois de definido, não pode ser alterado durante a execução do programa. (Perfeitas para criar massas de testes)

// const nome = 'Darth Vader'
// console.log(nome)
