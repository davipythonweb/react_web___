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


// Hooks
// utilizamos o react pela facilidade de sincronização do estado.
// Os Hooks são funçoes especiais de React, o useState possibilita a 
// sincronização do estado.

// exemplo:

const Compras = () => {
    // useState é um Hook que define uma variavel reativa
    const [count, setCount] = React.useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Comprar:{count}</button>
            <p>Total: {count}</p>
            <p>Preço: R$ {count * 250}</p>
        </div>
    )
}

// aula-600 finalizada