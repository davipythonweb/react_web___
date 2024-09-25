//aula 610
//componetes

// O ideal eh dividir o aplicativo em pequenos componetes 
// para facilitar a manutençao do mesmo.
// Iremos trabalhar durante o curso com 
// componentes funcionais

import React from 'react'
import Header from './Header'
import Footer from './Footer'

const App = () => {
	return (
		<Header />
		<p>Este eh o meu aplicativo</p>
		<Footer />
		)
}
export default App



// Interface 

// nao existe limite para a composiçao de componentes,
// eles podem ser desde componentes gerais como Header e Footer,
// até micro componentes como Input e Button.

// Form.jsx


import React from 'react'
import Button from './Button'
import Input from './Input'

 const Form = () => {
	return (
		<form />
			<p>
				<label htmlFor='nome'>Nome</label>
			</p>
		<form />
	)
}
export default App


// Return

// um componente deve sempre retornar algo.
// o retorno pode ser qualquer tipo de dado
// aceitado pelo JSX(string,array, um elemento JSX,null e etc).