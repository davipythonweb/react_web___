// Estado

// O estado de uma aplicaçao , representa as caracteristicas dela
// naquele momento. Por exemplo: os dados do usuario foram carregados
// o botao está ativo, o usuario esta na pagina de contato e etc.

import React from 'react'

const App = () => {
	const ativo = true

	return (
		<button disabled={!ativo}>{ativo ? 'Botao Ativo' : 'Botao Inativo'}</button>
)
}
export default App



//Hooks

// Os Hooks sao funçoes especiais do React que permitem
// controlarmos o estado e o ciclo de vida de componetes
// funcionais. Isso antes só era possivel com classes.

import React from 'react'
import useState from 'react'

const Exemplo = () => {
	const [ativo, setAtivo] = React.useState(true)

	return (
		<button onClick={() => setAtivo(!ativo)}>
			{ativo ? 'Botao Ativo' : 'Botao Inativo'}
		</button>
		)
}

//segundo exemplo de Hook:

import React from 'react'
import viteLogo from '/vite.svg'


const App = () => {
  const ativoHook = React.useState(false)
  const ativoValor = ativoHook[0]
  const atualizaValor = ativoHook[1]
  console.info(ativoValor)

  function handleClick() { 
    atualizaValor(!ativoValor) 
  } 

return ( 
  //usando um verificador ternario, modificando o valor atual utilizando a funcao 
  <button onClick={handleClick}>{ativoValor ? 'Botao Ativo' : 'Botao Inativo'}</button> 
  )

}
export default App

//React.useState

// o useState eh uma funçao que retorna uma Array com 2 valores.
// O primeiro valor guarda o dado do estado atual, pode ser qualquer
// tipo de dado como strings, arrays, numeros, boolen, null, undefined
// e objetos. O segundo valor eh uma funçao que pode ser,
// utilizada para modificarmos o estado do primeiro valor.

//Quando a funçao de modificaçao do estado eh ativada,
// todos os componetes que dependerem do estado, serão renderizados
// novamente e os seus filhos tambem. isso que garante a reatividade de
// componetes funcionais no React.


const App = () => {
	const [ativo, setAtivo] = React.useState(true)
	//Eh a mesma coisa que:
	// const ativoArray = React.useState(true)
	// const ativo = ativoarray[0]
	// const setAtivo = ativoArray[1]
} 
return (
	<button onClick={() => setAtivo(!ativo)}>
		{ativo ? 'Botão Ativo' : 'Botão Inativo'}
	</button>
)

}


// o uso de setName eh uma convençao
// do React para a funçao de
// modificaçao do estado





// Multiplos Estados

// Nao existem limites para o uso do useState, podemos definir
// diversos no mesmo componete.

const Teste = () => {
	const [contar, setAtivo] = React.useState(0)
	const [ativo, setAtivo] = React.useState(false)
	const [dados, setDados] = React.useState({nome: '', idade: ''})

	return <div></div>
}

//Exemplo 2

import React from 'react'
import viteLogo from '/vite.svg'


const App = () => {
  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({nome: 'Eliote', idade: '34'})
  console.info(ativo)

  function handleClick() { 
    setAtivo(!ativo)
    setDados({...dados, faculdade: 'possue faculdade'}) 
  } 

return (
  <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>

      {/* //usando um verificador ternario, modificando o valor atual utilizando a funcao  */}
      <button onClick={handleClick}>{ativo ? 'Botao Ativo' : 'Botao Inativo'}</button>  
  </div> 
   
  )

}
export default App





//Props

// podemos passar o estado e a funçao de modificaçao como
// propiedades para outros elementos

import React from 'react'
import Modal from '.Modal'
import ButtonModal from '.ButtonModal'

const Teste2 = () => {
	const [modal, setModal] = React.useState(false)

	return (
		<div>
			<Modal modal={modal} setModal={setModal} />
			<ButtonModal setModal={setModal} />
		</div>
		)
}
export default Teste2