import Header from "../../components/head_/route"
import '@/styles/inicio.css';

export default function Inicio(){
    return (
        <div className="conteiner-fund">
            <div className="conteiner-pag">
            <Header/>
            <div className="conteiner-inicio">
                <div className="conteiner-main-i">
                    <div className="tit-main">
                        <h1 className="tit-res1">RESERVAS ONLINE</h1>
                    </div>
                    <div className="tit-main-2">
                        <h3 className="tit-res2">BEM-VINDO</h3>
                    </div>
                    <div className="conteiner-text1">                       
                        <p>
                        Encontre e reserve facilmente acomodações, passeios e experiências em poucos cliques.
                        Planeje sua viagem com praticidade e segurança, tudo em um só lugar!
                        </p>
                    </div>
                    <div className="conteiner-icon">
                        <a href="">
                            <img id="inst3" className='icones' src="/images/icones/inst3.png" alt="" />
                        </a>
                        <a href="">
                            <img className="icones" src="/images/icones/facePreto.jpg" alt="" />
                        </a>
                        <a href="">
                            <img className="icones" src="/images/icones/twitterX.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            
  
            </div>
        </div>
    )
}