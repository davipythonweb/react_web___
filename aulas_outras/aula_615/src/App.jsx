import React from 'react'
import viteLogo from '/vite.svg'
import Produto from './Produto'

const App = () => {
  const [dados, setDados] = React.useState(null)

  function handleClick(event) {
    console.info(event.target.innerText)
  }
  return (
    <div>
    <button class='btn btn-danger' style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
    <button class='btn btn-success' style={{margin: '.5rem'}} onClick={handleClick}>smartphone</button>
    <button class='btn btn-primary' style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>
      <Produto />
    </div>
    )
}

export default App
