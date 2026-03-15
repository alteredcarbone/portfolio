import { Link } from "react-router-dom";
import "../../assets/Style/components/About/about.scss";

import htmlLogo from "../../assets/Style/stack/html5.png";
import cssLogo from "../../assets/Style/stack/css3.png";
import scssLogo from "../../assets/Style/stack/sass.png";
import jsLogo from "../../assets/Style/stack/javascript.png";
import reactLogo from "../../assets/Style/stack/react.png";
import apiLogo from "../../assets/Style/stack/api.png";
import dbLogo from "../../assets/Style/stack/database.png";
import responsiveLogo from "../../assets/Style/stack/responsive.png";
import fullstackLogo from "../../assets/Style/stack/fullstack.png";

export default function About() {
    return (
        <section className="about_page">
            <div className="about_container">
                <h1>À propos de moi</h1>

                <p className="about_intro">
                    Je suis Maxime Dupont, développeur web junior ,
                    ancien pâtissier en reconversion, formé au développement web full stack avec
                    OpenClassrooms.
                </p>

                <div className="about_content">
                    <div className="about_text">
                        <h2>Mon parcours</h2>

                        <p>
                            Avant de me tourner vers le développement web, j’ai
                            travaillé dans la pâtisserie. Cette expérience m’a
                            permis de développer des qualités essentielles comme
                            la rigueur, l’organisation, la précision et le sens
                            du travail bien fait.
                        </p>

                        <p>
                            J’ai ensuite choisi de me reconvertir dans un domaine
                            qui me passionne davantage : le développement web.
                            J’ai suivi un parcours full stack avec OpenClassrooms,
                            qui m’a permis d’acquérir de solides bases en
                            intégration web, en développement front-end, mais
                            aussi une compréhension plus large du fonctionnement
                            d’une application web.
                        </p>

                        <p>
                            Au cours de cette formation, j’ai travaillé sur HTML,
                            CSS, SCSS, JavaScript et React, tout en découvrant
                            également les bases de données, les API et la logique
                            de développement full stack.
                        </p>

                        <p>
                            Aujourd’hui, j’aime concevoir des interfaces modernes,
                            responsive et intuitives, avec une attention
                            particulière portée à l’expérience utilisateur, à la
                            clarté du code et à la qualité du rendu final.
                        </p>

                        <p>
                            Mon objectif est de continuer à progresser,
                            développer mes compétences et rejoindre des projets
                            concrets dans lesquels je pourrai apporter ma
                            motivation, ma rigueur et ma capacité d’adaptation.
                        </p>
                    </div>

                    <div className="about_skills">
                        <h2>Mes compétences</h2>

                        <ul>
                            <li>
                                <span>HTML</span>
                                <img src={htmlLogo} alt="HTML" className="skill_icon" />
                            </li>

                            <li>
                                <span>CSS</span>
                                <img src={cssLogo} alt="CSS" className="skill_icon" />
                            </li>

                            <li>
                                <span>SCSS</span>
                                <img src={scssLogo} alt="SCSS" className="skill_icon" />
                            </li>

                            <li>
                                <span>JavaScript</span>
                                <img src={jsLogo} alt="JavaScript" className="skill_icon" />
                            </li>

                            <li>
                                <span>React</span>
                                <img src={reactLogo} alt="React" className="skill_icon" />
                            </li>

                            <li>
                                <span>Responsive Design</span>
                                <img src={responsiveLogo} alt="Responsive Design" className="skill_icon" />
                            </li>

                            <li>
                                <span>API</span>
                                <img src={apiLogo} alt="API" className="skill_icon" />
                            </li>

                            <li>
                                <span>Bases de données</span>
                                <img src={dbLogo} alt="Bases de données" className="skill_icon" />
                            </li>

                            <li>
                                <span>Logique full stack</span>
                                <img src={fullstackLogo} alt="Logique full stack" className="skill_icon" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="about_cta">
                    <Link to="/contact" className="btn_primary">
                        Me contacter
                    </Link>
                </div>
            </div>
        </section>
    );
}