// imports principais do react
import ReactDom from "react-dom/client"
import React from "react"

// importando o componete do mesmo diretorio
import App from "./App"

// montando a raiz, para renderizar o componente
ReactDom.createRoot(document.getElementById("root")).render(<App />)