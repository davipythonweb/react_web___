// usando arrais


const filmes = [
    {nome: 'O Homem de Ferro1', ano: 2006},
    {nome: 'O Homem de Ferro2', ano: 2010},
    {nome: 'O Homem de Ferro3', ano: 2014},
]

return (
    <ul>
      {filmes
      .filter(({ano}) => ano >= 2009)
        .map(({nome, ano}) =>(
          <li key={ano}>
            {nome}, {ano}
          </li>
        ))}
        </ul>
    )
