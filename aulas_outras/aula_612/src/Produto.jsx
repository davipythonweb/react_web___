import React from 'react'

const Produto = ({ nome, marca,propriedades }) => {
	return (
		<div style={{ border: '1px solid', margin: '1rem 0', padding: '1rem'}}>
		{/* estilizando com css inline na div */}
			<p>{nome}</p>
			<p>{marca}</p>
			<ul>
			{/* pegando a lista com map, 
			renderizando o <li> para cada propriedade do Componete Produto*/}
				{propriedades.map((propriedade) =>(
					<li>{propriedade}</li>
					))}
			</ul>
		</div>
)
}
export default Produto