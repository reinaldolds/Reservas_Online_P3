"use client";
import '@/styles/header.css';
import { useState } from 'react';
import Link from 'next/link';


export default function Header(){
 
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  }

  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <img id='logo1' src='/images/logoReservasOline.jpg' alt="Logo" className='logo1' onClick={toggleZoom} style={{
          width: isZoomed ? "100px" : "60px", // Aumenta/diminui o tamanho
          height: isZoomed ? "100px" : "60px",
          cursor: "pointer", // Indica que é clicável
          transition: "all 0.3s ease", // Suaviza a animação
        }} />
  </div>
  <div className="flex-none">
    <span className='navega'>
      <Link className="btn btn-ghost text-lg" href="/inicio">Home</Link>
      <Link className="btn btn-ghost text-lg" href="/reserva_">Fazer Reservas</Link>
      <a className="btn btn-ghost text-lg" href="/consulta_">Consultar</a>
      <Link className="btn btn-ghost text-lg" href="/sobre_">Sobre</Link>

    </span>
  </div>
</div>
  )
}

