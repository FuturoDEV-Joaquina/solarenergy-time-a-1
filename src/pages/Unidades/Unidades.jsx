import { useState } from "react"
import Container from "../../components/templates/Container"

export default function Unidades() {
  const [apareceCadastro, setApareceCadastro] = useState(false)
  const unidades = [
    {
      id: 123,
      apelido: 'apelido 1',
      local: 'local 1',
      marca: 'marca 1',
      modelo: 'modelo 1',
      ativo: true
    },
    {
      id: 124,
      apelido: 'apelido 2',
      local: 'local 2',
      marca: 'marca 2',
      modelo: 'modelo 2',
      ativo: false
    }
  ]

  return (
    <Container>
      {apareceCadastro ?
        (<div>
          <h1>Cadastro de Unidades</h1>
          <button onClick={() => setApareceCadastro(false)}>Salvar</button>
        </div>) :
        (<div>
          <h1>Lista de Unidades</h1>
          <table>
            <tr>
              <th>Id</th>
              <th>Apelido</th>
              <th>Local</th>
              <th>Marca</th>
              <th>Modelo</th>
            </tr>
            {
              unidades.map((unidade) => (

                <tr>
                  <td>{unidade.id}</td>
                  <td>{unidade.apelido}</td>
                  <td>{unidade.local}</td>
                  <td>{unidade.marca}</td>
                  <td>{unidade.modelo}</td>
                </tr>
              ))
            }

          </table>

          <button onClick={() => setApareceCadastro(true)}> Nova Unidade </button>
        </div>
        )}


    </Container>
  )
}

