// utilizando a API https://viacep.com.br/ws/59124000/json/
// crie um formulario onde o usuario pode digitar o cep
// e o endereço completo eh retornado ao clicar em buscar

// pegando  id do elemento  
const inputCep = document.getElementById('cep')
const btnCep = document.getElementById('btnCep')

// pegando o elemento pelo nome da class
const resultadoCep = document.querySelector('.resultadoCep')

// adicionando um evento de click ao botao
btnCep.addEventListener('click', handleClick)

// criando a funcao para adicionar os dados digitados ao botao adicionando um event
function handleClick(event){
    event.preventDefault()
    const cep = inputCep.value
    buscaCep(cep)
}

// funcao para fazer a requisicao via fetch e responder em texto e adiciona a resposta a variavel que foi armazenada da classe da div
function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => {
        resultadoCep.innerText = body
    })
}

//------------------------------------------------

// testando a api cnpj
const cnpj = fetch('https://open.cnpja.com/office/07526557011659')


cnpj.then(resolucao => {
    return resolucao.json()
}).then((body) => {
    console.log(body)
})

// BUSCANDO CNPJ

// pegando  id do elemento  
const inputCNPJ = document.getElementById('cnpj')
const btnCNPJ = document.getElementById('btnCNPJ')

// pegando o elemento pelo nome da class
const resultadoCNPJ = document.querySelector('.resultadoCNPJ')

// adicionando um evento de click ao botao
btnCNPJ.addEventListener('click', handleClick2)

// criando a funcao para adicionar os dados digitados ao botao adicionando um event
function handleClick2(event){
    event.preventDefault()
    const cnpj = inputCNPJ.value
    buscaCNPJ(cnpj)
}

// funcao para fazer a requisicao via fetch e responder em texto e adiciona a resposta a variavel que foi armazenada da classe da div
function buscaCNPJ(cnpj) {
    fetch(`https://open.cnpja.com/office/${cnpj}`)
    .then(response => response.text())
    .then(body => {
        resultadoCNPJ.innerText = body
    })
}




// --------------------------------------------------
// exerciocio Bitcoin, mostrando o preço no body.

// pegando e seletor da class e armazenado em uma cont
const btcDisplay = document.querySelector('.btc')

// uncao para fazer a request via fetch e a resposta ser adicionada a cont com o preço do Bitcoin
function fetchBtc() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
        // console.log(btcJson) // json com todas as moedas
    })
}

// atualizando valor a cada 30s
// setInterval(fetchBtc, 1000 * 30)

fetchBtc()

// -----------------------------------------------

// exercicio da piada do chucknorris

// pegando o seletor do botao e armazenando em uma constante
const btnProxima = document.querySelector('.proxima')

// pegando o seletor do paragrafo e armazenando em uma constante
const paragrafoPiada = document.querySelector('.piada')

// funcao , fz um request via fetch para api e pega a resposta e armazena na variavel piada e mostra no body
function puxarPiada() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(piada => {
        paragrafoPiada.innerText = piada.value
    })
}

// adiciona um evento ao botao para quando clickar fazer novas requisiçoes a api e mostrar na tela com o funcao puxar piada
btnProxima.addEventListener('click', puxarPiada)
puxarPiada()




// async / await
// A palavra chave async, indica que a funçao pissui partes
// assincronas e que pretende esperar a resolução da mesma antes de continuar.
// o await, irá indicar a (promise) que devemos esperar.
// Faz parte do ES8

// EXEMPLO
async function puxarDados() {
    const dadosResponse = await fetch('./dados.json')
    const dadosJSON = await dadosResponse.json()

    document.body.innerText = dadosJSON.aula
}

puxarDados()

// A DIFERENÇA DO then / async
// Eh por mais uma questão de sintaxe limpa


// veja o exemplo da mesma função com o then e o await

// com o .then
function iniciarFetch() {
    fetch('./dados.json')
    .then(dadosResponse => dadosResponse.json())
    .then(dadosJSON => {
        document.body.innerText = dadosJSON.titulo
    })
}
iniciarFetch()

// com async await
async function iniciarFetch() {
    const dadosResponse = await fetch('./dados.json')
    const dadosJSON = await dadosResponse.json()
    document.body.innerText = dadosJSON.titulo
    }

iniciarFetch()