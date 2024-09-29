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