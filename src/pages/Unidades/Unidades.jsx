import { useState } from "react"
import Container from "../../components/templates/Container"

export default function Unidades() {
  const [apareceCadastro, setApareceCadastro] = useState(false)

  return (
    <Container>
      {apareceCadastro ? 
      (<div>
        <h1>Cadastro de Unidades</h1>
        <button onClick={( ) => setApareceCadastro(false)}>Salvar</button>
      </div>) : 
      (<div>
        <h1>Lista de Unidades</h1>
        <button onClick={( ) => setApareceCadastro(true)}> Nova Unidade </button>
      </div>
      )}


    </Container>
  )
}

