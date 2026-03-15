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
    const skills = [
        { name: "HTML", logo: htmlLogo, level: 90 },
        { name: "CSS", logo: cssLogo, level: 85 },
        { name: "SCSS", logo: scssLogo, level: 80 },
        { name: "JavaScript", logo: jsLogo, level: 75 },
        { name: "React", logo: reactLogo, level: 70 },
        { name: "Responsive Design", logo: responsiveLogo, level: 85 },
        { name: "API", logo: apiLogo, level: 65 },
        { name: "Bases de données", logo: dbLogo, level: 60 },
        { name: "Logique full stack", logo: fullstackLogo, level: 65 },
    ];

    return (
        <section className="about_page">
            <div className="about_container">
                <h1>À propos de moi</h1>

                <p className="about_intro">
                    Je suis Maxime Dupont, développeur web junior,
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

                        <div className="skills_list">
                            {skills.map((skill, index) => (
                                <div
                                    className="skill_item"
                                    key={skill.name}
                                    style={{ animationDelay: `${index * 0.12}s` }}
                                >
                                    <div className="skill_top">
                                        <div className="skill_infos">
                                            <img
                                                src={skill.logo}
                                                alt={skill.name}
                                                className="skill_icon"
                                            />
                                            <span>{skill.name}</span>
                                        </div>

                                        <span className="skill_percent">
                                            {skill.level}%
                                        </span>
                                    </div>

                                    <div className="skill_bar">
                                        <div
                                            className="skill_progress"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
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