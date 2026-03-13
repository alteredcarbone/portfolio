import logo from "../../assets/Style/icon/logo.png"
import instagram from "../../assets/Style/icon/instagram.png"
import github from "../../assets/Style/icon/github.png"
import twitter from "../../assets/Style/icon/twitter.png"
import linkedin from "../../assets/Style/icon/linkedin.png"
import "../../assets/Style/layout/footer.scss"
export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_social'>
            <img src={logo} alt='Logo Maxime Dupont' className='footer_logo'/>
                <ul className='footer_ul'>
                    <li>
                        <a href='https://www.instagram.com/maxime_dupont_46/' className='social_icon'>
                            <img src={instagram} alt="Profil Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href={'https://github.com/alteredcarbone'} className='social_icon'>
                            <img src={github} alt="Profil Github" />
                        </a>
                    </li>
                    <li>
                        <a href={'https://x.com/altered_carbone'} className='social_icon'>
                            <img src={twitter} alt="Profil Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.linkedin.com/in/maxime-dupont-402ab1242/'} className='social_icon'>
                            <img src={linkedin} alt="Profil Linkedin" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
