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
    alert('Comprou: ' + event.target.innerText)
  }
}

return (
  <div>
    <button onClick={hadleClick}>Camisa</button>
    <button onClick={hadleClick}>Bermuda</button>
  </div>
  )

export default App
