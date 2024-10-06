import React from 'react'
import viteLogo from '/vite.svg'
import ButtonModal from './ButtonModal'


const App = () => {
  const [modal, setModal] = React.useState(false)

return (
  <div>
      <div>{modal ? 'Modal Aberto': 'Modal Fechado'}</div>
      <ButtonModal setModal={setModal} />  
  </div> 
   
  )

}
export default App
