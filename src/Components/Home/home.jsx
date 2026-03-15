import Aboutpreview from "./about_preview.jsx";
import Contactpreview from "./contact_preview.jsx";
import Hero from "./hero.jsx";
import Reveal from "./reveal.jsx";

export default function Home() {
    return (
        <>
            <Reveal>
                <Hero />
            </Reveal>
            <Reveal>
                <Aboutpreview />
            </Reveal>
            <Reveal>
                <Contactpreview />
            </Reveal>
        </>
    );
}