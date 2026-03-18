import { useState } from "react";
import "../../assets/Style/components/projects/projects.scss";

import htmlLogo from "../../assets/Style/stack/html5.png";
import cssLogo from "../../assets/Style/stack/css3.png";
import scssLogo from "../../assets/Style/stack/sass.png";
import jsLogo from "../../assets/Style/stack/javascript.png";
import reactLogo from "../../assets/Style/stack/react.png";
import apiLogo from "../../assets/Style/stack/api.png";
import responsiveLogo from "../../assets/Style/stack/responsive.png";



const stackIcons = {
    HTML: htmlLogo,
    CSS: cssLogo,
    SCSS: scssLogo,
    JavaScript: jsLogo,
    React: reactLogo,
    API: apiLogo,
    Responsive: responsiveLogo,
};

const projectsData = [
    {
        id: 1,
        title: "Booki",
        description: `Intégration d’une page d’accueil responsive en HTML et CSS.
Ce projet pourra évoluer avec l’ajout de fonctionnalités et d’améliorations futures.`,
        stacks: ["HTML", "CSS", "Responsive"],
        github: "https://github.com/alteredcarbone/Projet-1",
        demo: "https://projet-1-5es.pages.dev/",
    },
    {
        id: 2,
        title: "Kasa",
        description: `Application React avec composants, routing et SCSS.
Une évolution future est envisagée pour améliorer certaines fonctionnalités et le confort d’utilisation.`,
        stacks: ["React", "SCSS", "JavaScript"],
        github: "https://github.com/alteredcarbone/Projet-4",
        demo: "https://projet-4.pages.dev/",
    },
];

const filters = ["Tous", "HTML", "CSS", "Responsive", "React", "SCSS", "JavaScript"];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("Tous");

    const filteredProjects =
        activeFilter === "Tous"
            ? projectsData
            : projectsData.filter((project) =>
                project.stacks.includes(activeFilter)
            );

    return (
        <section className="projects_page">
            <div className="projects_container">
                <h1>Mes projets</h1>

                <div className="projects_filters">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={activeFilter === filter ? "active" : ""}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="projects_grid">
                    {filteredProjects.map((project) => (
                        <article className="project_card" key={project.id}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>

                            <div className="project_stacks">
                                {project.stacks.map((stack) => (
                                    <img
                                        key={stack}
                                        src={stackIcons[stack]}
                                        alt={stack}
                                        title={stack}
                                        className="stack_icon"
                                    />
                                ))}
                            </div>

                            <div className="project_links">
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                                <a href={project.demo} target="_blank" rel="noreferrer">
                                    Voir le projet
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}