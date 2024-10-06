import React from 'react'
import viteLogo from '/vite.svg'


const App = () => {
  const [ativo, setAtivo] = React.useState(false)
  console.info(ativo)

  function handleClick() { 
    setAtivo(!ativo) 
  } 

return ( 
  //usando um verificador ternario, modificando o valor atual utilizando a funcao 
  <button onClick={handleClick}>{ativo ? 'Botao Ativo' : 'Botao Inativo'}</button> 
  )

}
export default App
