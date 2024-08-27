// const promessa = new Promise((resolve, reject) => {
//     let condicao = true
//     if(condicao) {
//         setTimeout(() => {
//             resolve({nome: 'Davi', idade: 29})
//         },3000)
//     } else {
//         reject(Error('Um erro ocorreu na promisse'))

//     }
// })

// promessa.then((resolucao) => {
//     console.log(resolucao)
// })

// -----------------------------------

// exemplo de promessas(PROGRAMAÇÂO ASSINCRONA)
// const login = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Usuario Logado!')
//     }, 3000)
// })


// const dados = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Dados Carregados!')
//     }, 3500)
// })

// const carregouTudo = Promise.all([login, dados])

// carregouTudo.then((resolucao) => {
//     console.log(resolucao)
// })