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

  // fazendo os calculos, limpar os arrais com o map passando o item como callback, usando o replace para trocar os Crifores por espaços vazios e tranformando em numero com number. fazendo a soma dos numeros do arrai com o reduce, recebendo o valor anterior + o valor atual.
  const total = dados.compras
  .map((item) => Number(item.preco.replace('R$ ', '')))
  .reduce((a, b) => a + b)

  return (
    // variaveus com os dados dos clientes
      <div>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        {/* verificando a situação do cliente, usando operadores ternarios para mudar a situaçao ,e para mudar de cores. Usando a tag style para as cores */}
        <p>Situação:
          <span style={{color:dados.ativa ? 'green' : 'red'}}>
            {dados.ativa ? 'Ativa' : 'Inativa'}
          </span>
        </p>
        {/* fazendo uma mensagem para verificar se o valor eh maior que 10000, utilizando o verificador => && . */}
        <p>Total: R$ {total}</p>
        {/* quando a expressao eh verdadeira eh criado o elemento JSX. */}
        {total > 10000 && <p>Você untrapassou o limite de dez mil reais!</p>}
      </div>
  )
}

export default App
