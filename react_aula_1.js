// React Element

// todo elemento React eh criado com a função createElement.
// O Babel eh o responsavel por tranformar o elemento criado com JSX
// (que se parece com HTML) em funçoes de React.



// function App() {
//     return <div id="container">Meu App</>
// }

// // Eh transformado pelo Babel em:

// function App() {
//     return React.createElement('div', {id 'container'}, 'Meu App')
// }


// COmponentes

// permitem voce dividir a sua interface em pequenos elementos.
// São criados atraves de funçoes que retornam elementos React.

// Funcicion Component, exemplo:

// const Button = () {
//     return <Button>Comprar</Button>
// }