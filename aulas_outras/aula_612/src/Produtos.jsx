import React from 'react'
import Titulo from './Titulo'
import Produto from './Produto'

const 	Produtos = ()  => {
	const produtos = [
	{nome: 'Notebook', propriedades: ['4gb ram', '120gb']},
	{nome: 'Smartphone', propriedades: ['3gb ram', '32gb']}
]	


	return (
		<section>
			<Titulo texto="Produtos" />
			<p>Esta eh a pagina de produtos.</p>
			{produtos.map((produto) => (
				<Produto  key={produto.nome} {...produto} />
				))}
		</section>
)
}
export default Produtos