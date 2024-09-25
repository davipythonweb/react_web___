import React from 'react'
import viteLogo from '/vite.svg'

// Eventos

// Podemos atribuir eventos diretamente aos elementos JSX como
// um atributo. Os Eventos sao sintáticos, ou seja, sao criados
// pelo própio React porem seguindo as especificaçoes da W3C
//(e funcionam igualmente nos diversos browsers que o React
// suporta )

const App = () => {
  function handleClick(event) {
    console.log(event.target)
  }
  return <button onClick={handleClick} onMouseMove={handleClick}>Clique</button>
}

export default App

// E possivel executar uma funçao anonima no evento

// Guardar o estado do DOM
// não eh o mais indicado, veremos como fazer iso com hooks. 

const App = () => {
  function handleClick(event) {
    console.log(event.target)
  }
  return <button onClick={(event) => console.log(event)}Clique</button>
}

{/* Eventos no windows/document ou qualquer elemento */}
{/* fora do React, devem ser adicionados com JavaScript normalmente, */}
{/* usando o addEventListener */}

{/* Este tipo de evento será */}
{/* sera adicionando com o hook useEffect */}

const App = () => {
  function handleScroll(event) {
    console.log(event)
  }
  window.addEventListener('scroll', handleScroll)
  return <div style={{ height: '200vw'}}>Div</div>
}

