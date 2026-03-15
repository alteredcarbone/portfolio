import { useEffect, useState } from "react";
import "../../assets/Style/components/Home/hero.scss";

export default function Hero() {
    const titleText = "Maxime Dupont";
    const subtitleText = "Développeur Web";
    const paragraphText = "Je crée des applications web modernes et performantes.";

    const [displayedTitle, setDisplayedTitle] = useState("");
    const [displayedSubtitle, setDisplayedSubtitle] = useState("");
    const [displayedParagraph, setDisplayedParagraph] = useState("");

    useEffect(() => {
        let titleIndex = 0;
        let subtitleIndex = 0;
        let paragraphIndex = 0;

        const typeTitle = setInterval(() => {
            setDisplayedTitle(titleText.slice(0, titleIndex + 1));
            titleIndex++;

            if (titleIndex === titleText.length) {
                clearInterval(typeTitle);

                const typeSubtitle = setInterval(() => {
                    setDisplayedSubtitle(subtitleText.slice(0, subtitleIndex + 1));
                    subtitleIndex++;

                    if (subtitleIndex === subtitleText.length) {
                        clearInterval(typeSubtitle);

                        const typeParagraph = setInterval(() => {
                            setDisplayedParagraph(paragraphText.slice(0, paragraphIndex + 1));
                            paragraphIndex++;

                            if (paragraphIndex === paragraphText.length) {
                                clearInterval(typeParagraph);
                            }
                        }, 50);
                    }
                }, 80);
            }
        }, 120);

        return () => {
            clearInterval(typeTitle);
        };
    }, []);

    return (
        <section className="hero">
            <h1 className="typing_title">
                {displayedTitle}
                {displayedTitle.length < titleText.length && <span className="cursor">|</span>}
            </h1>

            <h2 className="typing_subtitle">
                {displayedSubtitle}
                {displayedTitle.length === titleText.length &&
                    displayedSubtitle.length < subtitleText.length && (
                        <span className="cursor">|</span>
                    )}
            </h2>

            <p className="typing_paragraph">
                {displayedParagraph}
                {displayedSubtitle.length === subtitleText.length &&
                    displayedParagraph.length < paragraphText.length && (
                        <span className="cursor">|</span>
                    )}
            </p>
        </section>
    );
}