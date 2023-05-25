import { useNavigate } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-styled">
      <h1>DevInHouse - Navbar</h1>
      <nav>
        {/* botão de redirecionamento para Dashboard */}
        <button onClick={() => navigate("/")}>DashBoard</button>
        {/* botão de redirecionamento para a rota de Unidades Consumidoras */}
        <button onClick={() => navigate("/unidades")}>
          Unidade Consumidora
        </button>
        {/* botão de redirecionamento para a rota de Cadastros */}
        <button onClick={() => navigate("/cadastro")}>
          Cadastro de Energia Geradora
        </button>
      </nav>
    </div>
  );
}
