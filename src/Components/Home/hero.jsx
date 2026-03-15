import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="hero">
            <h1>Maxime Dupont</h1>
            <h2>Développeur Web</h2>

            <p>
                Je crée des applications web modernes et performantes.
            </p>

            <div className="hero_buttons">
                <Link to="/about">À propos de moi </Link>
                <Link to="/contact">Me contacter</Link>
            </div>
        </section>
    )
}