import React from 'react'
import viteLogo from '/vite.svg'
import Produto from './Produto'


// Usando useState para fazer um fetch

const App = () => {
  const [dados, setDados] = React.useState(null)

  const [carregando, setCarregando] = React.useState(null)

  async function handleClick(event) {

    setCarregando(true)

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.
      innerText}`
      )
    const json = await response.json()
    setDados(json)

    setCarregando(false)

    console.info(json)
  }

  return (
    <div>
      <button className='btn btn-danger' style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
      <button className='btn btn-success' style={{margin: '.5rem'}} onClick={handleClick}>smartphone</button>
      <button className='btn btn-primary' style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>

      {carregando && <p>Carregando...</p>}

      {/* se carregando for falso e se dados existir, se for verdadeiro, mostrar produto. */}
      {!carregando && dados && <Produto dados={dados}/>}
    </div>
    )
}

export default App
