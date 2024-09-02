import React from "react"

// exercicio - aula 606

const alana = {
  cliente: 'Alana',
  idade: 25,
  compras: [
      {nome: 'Notebook', preco: 'R$ 3000'},
      {nome: 'Geladeira', preco: 'R$ 3000'},
      {nome: 'Smartphone', preco: 'R$ 2500'}
  ],
  ativa: true
}

const davi = {
  cliente: 'Davi',
  idade: 29,
  compras: [
      {nome: 'Violão', preco: 'R$ 1500'},
      {nome: 'Carro', preco: 'R$ 30000'},
      {nome: 'Smartphone', preco: 'R$ 4000'}
  ],
  ativa: false
}


const App = () => {
  const dados = alana

  const total = dados.compras
  .map((item) => Number(item.preco.replace('R$ ', '')))
  .reduce((a, b) => a + b)

  return (
      <div>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>Situação:
          <span style={{color:dados.ativa ? 'green' : 'red'}}>
            {dados.ativa ? 'Ativa' : 'Inativa'}
          </span>
        </p>
        <p>Total: R$ {total}</p>
        {total > 10000 && <p>Você untrapassou o limite de dez mil reais!</p>}
      </div>
  )
}

export default App
