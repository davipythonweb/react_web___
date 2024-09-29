import React from 'react'
import Titulo from './Titulo'
import Produto from './Produto'

const 	Produtos = ()  => {
	const produtos = [
	{nome: 'Notebook', marca:'Positivo', propriedades: ['4gb ram', '120gb']},
	{nome: 'Smartphone', marca: 'Motorola', propriedades: ['3gb ram', '32gb']}
]	


	return (
		<section>
			<Titulo texto="Produtos" />
			<p>Esta eh a pagina de produtos.</p>
			{/* mostrando a lista com map , 
			para cada produto , mostrando o componete diferente*/}
			{/* usando o Spread para  passar as propiedades do produto direto */}
			{produtos.map((produto) => (
				<Produto  key={produto.nome} {...produto} />
				))}
		</section>
)
}
export default Produtos
