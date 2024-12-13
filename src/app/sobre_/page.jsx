import Header from "../../components/head_/route"
import '@/styles/sobre.css';

export default function Sobre(){
    return (
        <div className="conteiner-fund-sobre">
        <div className="conteiner-pag-sobre">
        <Header/>
        <div className="conteiner-sobre">
            <ul className="ul-sobre">
                <li className="li-sobre">
                    <h3 className="tit-sobre">Quem Somos</h3>
                    <p className="somos-sobre">Projeto Acadêmico, criado por equipe de alunos universitários da <i>Uniesp</i> do terceiro período.</p>
                </li>
                <li className="li-sobre">
                    <h3 className="tit-sobre">Objetivo</h3>
                    <p className="obj-sobre">Sistema de Reserva Online com foco em atendimeno de forma simples e objetiva, facilitando atendimento para que voçê aproveite o melhor da sua reserva.</p>
                </li>
                <li className="li-sobre">
                    <h3 className="tit-sobre">Equipe</h3>
                    <p className="nomes-sobre">
                        Reinaldo Lira <br />
                        Rikelmy Paulino <br />
                        Elidawydson 
                    </p>
                </li>
                <li id="contato-sobre" className="li-sobre">
                    <h3 className="tit-contato">Contatos</h3>
                    <div className="conteiner-icon-sobre">
                        <a href="">
                            <img id="inst3" className='icones' src="/images/icones/inst3.png" alt="" />
                            <h5>Instagram</h5>
                        </a>
                        <a href="">
                            <img className="icones" src="/images/icones/facePreto.jpg" alt="" />
                            <h5>Facebook</h5>
                        </a>
                        <a href="">
                            <img className="icones" src="/images/icones/twitterX.jpg" alt="" />
                            <h5>Twitter</h5>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        </div>
        </div>

    )
}