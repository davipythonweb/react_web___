//aula 611
// Propiedades

// Assim como uma funçao pode receber argumentos,
// podemos tambem passar argumentos aos componentes.
// Esses sao conhecimentos como propriedades ou props.

import React from 'react'

const Titulo = (props) => {
	return <h1>{props.texto}</h1>
}
const App = () => {
	return (
		<section>
			<Titulo texto="Meu Primeiro Títuo" />
			<Titulo texto="Meu Segundo Títuo" />
		</section>
	)
}
export default App


//com desestruturação

import React from 'react'

const Titulo = ({cor, texto}) => {
	return <h1 style={{ color: cor}}> {texto}</h1>
}
const App = () => {
	return (
		<section>
			<Titulo  cor="red" texto="Meu Primeiro Títuo" />
			<Titulo  cor="blue" texto="Meu Segundo Títuo" />
		</section>
	)
}
export default App


// children

// Se utilizarmos o componete abrindo e fechando o mesmo,
// o conteudo interno deste, sera acessado atraves da 
// propiedade children.

import React from 'react'

const Titulo = (props) => {
	return <h1>{props.children}</h1>
}
const App = () => {
	return (
		<section>
			<Titulo texto="Meu Primeiro Título" />
			<Titulo>
				<p>Titulo 2</p>				
				<p> titulo 3</p>				
			</Titulo>
		</section>
	)
}
export default App


// Rest e Spread

// usamos o rest e spread , quando nao sabemos todas as
// propiedades que um componete pode receber.

import React from 'react'

const Input = ({label, id, ...props}) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input id={id} type="text">{...props} />
		</div>
		)
}

export default Input


//Dados

//podemos passar difenrentes tipos de dados e até outros componetes
// nas propiedades

const App = () => {
	const logado = true
	const nome = 'Andre'

	return (
		<section>
			<Header logado={logado} nome={nome} />
		</section>
		)
}

const Header = ({logado, nome}) = {
	if (logado) {
		return <header>Bem vindo, {nome}</header>
	} else {
		return <header>Header</header>
	}
}