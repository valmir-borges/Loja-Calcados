import React from 'react'
import style from '../styles/sobre.module.css'
import Faixada1 from '../img/faixada-1.png'
import Faixada2 from '../img/faixada-2.png'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function sobre(){

    return(
        <>
        <Navbar/>
        <section className={style.mainContainer}>
            <span className={style.title}>SOBRE A EMPRESA</span>
            <div className={style.infoContainer}>
                <div className={style.infosContainers}>
                    <div className={style.imgContainer}>
                        <img src={Faixada1} alt="" className={style.img} />
                    </div>
                    <div className={style.textContainer}>
                        <span className={style.secondTitle}>NOSSA HISTÓRIA</span>
                        <span className={style.textInfo}>Bem-vindo à Sapatilla! A nossa história é uma verdadeira jornada de paixão, tradição e dedicação ao atendimento e à qualidade.
                        Tudo começou em 1970, quando meu pai, fundou a loja com um sonho simples, mas grandioso: oferecer calçados de alta qualidade e um atendimento que 
                        fizesse cada cliente se sentir especial. Com um pequeno espaço em Pederneiras e uma visão clara, ele iniciou o negócio com muito entusiasmo e um compromisso 
                        inabalável com a excelência.</span>
                    </div>
                </div>
                <div className={style.infosContainers}>
                    <div className={style.textContainer}>
                        <span className={style.secondTitle}>NOSSA MISSÃO</span>
                        <span className={style.textInfo}>Na Sapatilla, nossa missão é proporcionar uma experiência de compra única e inspiradora, 
                            oferecendo não apenas sapatos, mas também conforto e estilo que acompanham cada passo da vida de nossos clientes. 
                            Comprometemo-nos a selecionar com rigor produtos de alta qualidade que atendam às diversas necessidades e preferências dos nossos clientes, 
                            desde o dia a dia até ocasiões especiais..</span>
                    </div>
                    <div className={style.imgContainer}>
                        <img src={Faixada2} alt="" className={style.img}/>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default sobre