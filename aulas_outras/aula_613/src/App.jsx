import React from 'react'

import viteLogo from '/vite.svg'


const App = () => {
  const ativo = true

  return (
    <button disabled={!ativo}>{ativo ? 'Botao Ativo' : 'Botao Inativo'}</button>
)
}
export default App
