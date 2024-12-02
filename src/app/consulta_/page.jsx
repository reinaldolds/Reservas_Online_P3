'use client'
import Header from "../../components/head_/route";
import '@/styles/consulta.css';
import { useState } from "react";

export default function Consulta() {
    const [busca, setBusca] = useState(""); // Estado para o valor do input
    const [resultado, setResultado] = useState([]); // Estado para armazenar os resultados

    const realizarConsulta = async () => {
        if (!busca.trim()) return alert("Digite algo para buscar.");

        try {
            const res = await fetch(`/api/reservas?query=${busca}`, { method: "GET" });
            const data = await res.json();

            if (res.ok) {
                setResultado(data); // Atualiza o estado com os resultados
            } else {
                alert(data.message || "Erro ao buscar reservas.");
            }
        } catch (error) {
            console.error("Erro na consulta:", error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    return (
        <div className="conteiner-fund">
            <div className="conteiner-pag">
                <Header />

                <div className="conteiner-consulta">
                    <h2 className="tit-cons">Realizar Consulta</h2>
                    <input
                        className="inp-busca"
                        type="text"
                        placeholder="Nome, Email, Contato"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />
                    <button onClick={realizarConsulta} className="btn-busca">Pesquisar</button>
                </div>

                <div className="conteiner-resultado">
                    <h3 className="tit-res">Resultado da Consulta</h3>
                    <div className="conteiner-lista">
                        {resultado.length > 0 ? (
                            <ul className="lista-cons">
                                {resultado.map((reserva, index) => (
                                    <li key={index} className="item-cons">
                                        Nome: {reserva.nome}, Email: {reserva.email}, Idade: {reserva.idade}, Contato: {reserva.contato}, Mesa: {reserva.numeroMesa}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="sem-resultados">Nenhuma reserva encontrada.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
