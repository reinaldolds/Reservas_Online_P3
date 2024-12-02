'use client'
import { useState } from "react";
import Header from "../../components/head_/route";
import "@/styles/fazer_reservas.css";

export default function Reservas() {
  // Estados para o formulário e mensagens
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: "",
    contato: "",
    mesa: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Atualiza os campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Validação simples
    if (!formData.nome || !formData.email || !formData.idade || !formData.contato || !formData.mesa) {
      setMessage("Por favor, preencha todos os campos!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Reserva cadastrada com sucesso!");
        setFormData({
          nome: "",
          email: "",
          idade: "",
          contato: "",
          mesa: "",
        });
      } else {
        setMessage(`Erro: ${data.error}`);
      }
    } catch (error) {
      console.error("Erro ao cadastrar reserva:", error);
      setMessage("Erro ao conectar com o servidor. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="conteiner-fund">
      <div className="conteiner-pag">
        <Header />
        <div className="conteiner-reservas">
          <div className="conteiner-re2">
            <h3 className="wel-titulo">Bem-vindo</h3>
            <h1 className="wel-tituloh1">Cadastro de Reservas</h1>

            <form className="form1" onSubmit={handleSubmit}>
              <input
                className="inpnome"
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                placeholder="Nome"
              />
              <input
                className="inpemail"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="E-mail"
              />
              <input
                className="inpidade"
                type="number"
                id="idade"
                name="idade"
                value={formData.idade}
                onChange={handleInputChange}
                required
                placeholder="Idade"
              />
              <input
                className="inpcontato"
                type="text"
                id="contato"
                name="contato"
                value={formData.contato}
                onChange={handleInputChange}
                required
                placeholder="Contato"
              />
              <select
                className="item-reserva"
                id="mesa"
                name="mesa"
                value={formData.mesa}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione uma mesa</option>
                <option value="Mesa 1">Mesa 1</option>
                <option value="Mesa 2">Mesa 2</option>
                <option value="Mesa 3">Mesa 3</option>
                <option value="Mesa 4">Mesa 4</option>
                <option value="Mesa 5">Mesa 5</option>
              </select>

              <button type="submit" className="but-form" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar Reserva"}
              </button>
            </form>

            {message && <p className="message">{message}</p>}
          </div>

          <div className="conteiner-op">
            <h1 className="item-titulo">Items Disponíveis</h1>
            <div className="dis-mesas">
              <img className="icone-mesa" src="/images/icones/iconeMesa2.jpg" alt="Mesa" />
              <h4 className="mesa-titulo"> Mesa 1 Tipo: simples valor: </h4>
              <h4>50,00</h4>
            </div>
            <div className="dis-mesas">
              <img className="icone-mesa" src="/images/icones/iconeMesa2.jpg" alt="Mesa" />
              <h4 className="mesa-titulo"> Mesa 2 Tipo: Bronze valor: </h4>
              <h4>70,00</h4>
            </div>
            <div className="dis-mesas">
              <img className="icone-mesa" src="/images/icones/iconeMesa2.jpg" alt="Mesa" />
              <h4 className="mesa-titulo"> Mesa 3 Tipo: Prata valor: </h4>
              <h4>100,00</h4>
            </div>
            <div className="dis-mesas">
              <img className="icone-mesa" src="/images/icones/iconeMesa2.jpg" alt="Mesa" />
              <h4 className="mesa-titulo"> Mesa 4 Tipo: Ouro valor: </h4>
              <h4>150,00</h4>
            </div>
            <div className="dis-mesas">
              <img className="icone-mesa" src="/images/icones/iconeMesa2.jpg" alt="Mesa" />
              <h4 className="mesa-titulo"> Mesa 5 Tipo: Premium valor: </h4>
              <h4>200,00</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

