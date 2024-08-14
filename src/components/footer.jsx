import style from '../styles/footer.module.css'

function Footer(){
    return(
        <>
    <footer>
        <div className={style.footercontent} id='footer'>
            <div className={style.footercontacts}>
                <div className={style.logo}>
                    <img  alt="" />
                </div>
                <p className={style.sublogo}>Calce com estilo</p>

                <div className={style.footersocialmedia}>
                    <a href="" target='_blank' className={`${style.footerlink} ${style.instagram}`}>
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="" target='_blank' className={`${style.footerlink} ${style.facebook}`}>
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="" className={`${style.footerlink} ${style.whatsapp}`}>
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div>
            
            <ul className={style.footerlist}>
                <li>
                    <h3>Ajuda e Suporte</h3>
                </li>
                <li>
                    <a href="#" className={style.footerlink}>A empresa</a>
                </li>
                <li>
                    <a href="#" className={style.footerlink}>Segurança e Privacidade</a>
                </li>
                <li>
                    <a href="#" className={style.footerlink}>FAQ</a>
                </li>
            </ul>

            <ul className={style.footerlist}>
                <li>
                    <h3>Calçados</h3>
                </li>
                <li>
                    <a href="#" className={style.footerlink}>Tênis esportivos</a>
                </li>
                <li>
                    <a href="#" className={style.footerlink}>Tênis casuais</a>
                </li>
                <li>
                    <a href="#" className={style.footerlink}>Tênis sociais</a>
                </li>
            </ul>

            <div className={style.footersubscribe}>
                <h3>Inscreva-se Já</h3>

                <p>
                    Coloque seu e-mail para receber notificações sobre nossas novidades
                </p>

                <div className={style.inputgroup}>
                    <input type="email" id="email" placeholder='Insira seu Email...'/>
                    <button>
                    <i class="fa-solid fa-envelope" style={{color: '#000000'}}></i>                    
                    </button>
                </div>
            </div>
        </div>

        <div className={style.footercopyright}>
            Sapatilla &
            2024 all rights reserved
        </div>
    </footer>
        </>
    )
}
export default Footer;