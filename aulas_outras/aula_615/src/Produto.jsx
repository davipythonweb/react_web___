import React from 'react'

const Produto = ({ dados }) => {
	return <div>
		<h1 style={{ margin: '.9rem'}}>{dados.nome}</h1>
		<p style={{ margin: '.9rem'}}>R$ {dados.preco}</p>
		<img style={{ margin: '.9rem'}} src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
	</div>
}

export default Produto