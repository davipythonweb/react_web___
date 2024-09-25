//aula 611
// Propiedades

// Assim como uma funçao pode receber argumentos,
// podemos tambem passar argumentos aos componentes.
// Esses sao conhecimentos como propriedades ou props.
import React from 'react'

const Titulo = (props) = {
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