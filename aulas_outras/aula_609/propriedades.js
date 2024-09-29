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
