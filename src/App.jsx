import Dashboard from "./pages/Dashboard/Dashboard"
import Unidades from "./pages/Unidades/Unidades"
import CadastroEnergia from "./pages/CadastroEnergia/CadastroEnergia"
import ErroRota from "./pages/ErroRota/ErroRota"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
            {/* rota para a Home/dashboard */}
        <Route path="/dashboard" element={<Navigate replace to="/" />} />
            {/* redirecionamento da rota dashboard para a "/" */}

        <Route path="/unidades" element={<Unidades />} />
            {/* rota para a lista de Unidades */}
        <Route path="/cadastro" element={<CadastroEnergia />} />  
            {/* rota para o Cadastro de Energia Gerada */}
        <Route path="*" element={<ErroRota />} />
             {/* rota para erro no*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
