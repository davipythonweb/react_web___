// exemplo de fetch API (PROGRAMAÇÂO ASSINCRONA)
// Ele faz uma requisicao HTTP e retrona uma Response
// Fazendo uma requisicao e pegando o body do texto
// const dados = fetch('./dados.txt')

// dados.then((resolucao) => {
//     resolucao.text().then((body) => {
//         console.info(body)
//     })
// })
// ou
// const dados1 = fetch('./dados.txt')

// dados1.then(resolucao => {
//     return resolucao.text()
// }).then((body) => {
//     console.log(body)
// })


// ----------------------------

// SITE API PARA CEP
// link = https://viacep.com.br/ws/59124000/json/
// OBS:Eh só colocar o CEP, spós o ws na url

// Fazendo a requisição fetch na url
// const cep = fetch('https://viacep.com.br/ws/59124000/json/')

// cep.then(resolucao => {
//     return resolucao.text()
// }).then((body) => {
//     console.log(body)
// })

// ou transformando para json
// const cep2 = fetch('https://viacep.com.br/ws/59124000/json/')

// cep2.then(resolucao => {
//     return resolucao.json()
// }).then((body) => {
//     console.log(body)
// })

// adicionando dentro do body
// const cep3 = fetch('https://viacep.com.br/ws/59139580/json/')

// cep3.then(resolucao => {
//     return resolucao.text()
// }).then((body) => {
//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = body
// })




// usando fech com imagem
// const imagemText = fetch('./react.png')

// imagemText.then(resolucao => resolucao.text())
// .then((body) => {
//     console.log(body)
// })

// .blob
const imagem = fetch('./react.png')

imagem.then(r => r.blob())
.then((body) => {
    console.log(body)
})

// adicionando a imagem a pagina com fetch
const imagemNaPagina = fetch('./react.png')

imagemNaPagina.then(r => r.blob())
.then((body) => {
    const blobUrl = URL.createObjectURL(body)
    const imgDom = document.querySelector('img')
    imgDom.src = blobUrl
})

// usando fech para retornar um status
const situacao = fetch('.dados.txt')

situacao.then(response => {
    console.log(response.status)
    if(response.status === 404) {

         console.log('Pagina Não Encontrada!')
    }
}) 