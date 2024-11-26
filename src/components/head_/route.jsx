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
      <a className="btn btn-ghost text-lg" href="#">Home</a>
      <Link className="btn btn-ghost text-lg" href="/components/fazer_reserva">Fazer Reservas</Link>
      <a className="btn btn-ghost text-lg" href="#">Consultar</a>
      <a className="btn btn-ghost text-lg" href="#">Sobre</a>

    </span>
  </div>
</div>
  )
}

