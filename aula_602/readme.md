
## iniciando um projeto com bundle-esbuild 


- iniciando um pacote
`npm init -y`
`create index.html`
`create tag script`
`npm install esbuild`

* adicionar em packege.json
`a primeira linha gera o bundle, pega o arquivo de entrada e gera a saida, cria um server, ficar verificando qualquer mudança(debuger)`
`segunda linha, comando de build para gerar o arquivo de saída = main.js`
"""
"scripts":{
    "start": "esbuild --bundle src/main.jsx --outfile=main.js --servedir=./ --watch",
    "build": "esbuild --bundle src/main.jsx --outfile=main.js"
},
"""
`npm run (comando) , ou só: npm start`
`npm run build`

* instalando o React
`npm install react react-dom`

* fazendo o build para carregar todo o arquivo react importado para dentro de => main.js
`npm run build`

- node-version==20.17.0

- npm-version==10.8.2