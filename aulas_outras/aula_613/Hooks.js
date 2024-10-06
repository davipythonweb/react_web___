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
