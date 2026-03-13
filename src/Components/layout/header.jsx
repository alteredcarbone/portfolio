import { NavLink } from "react-router-dom";
import logo from "../../assets/Style/icon/logo.png";
import "../../assets/Style/layout/header.scss";

export default function Header() {
    return (
        <header className="header">
            <NavLink
            to="/" className={({ isActive }) =>
            `header_lin ${isActive ? "is-active" : ""}`}>
                <img src={logo} alt="Maxime Dupont" className="header_logo"/>
            </NavLink>
            <nav className="header_nav" aria-label="Navigation principale">
                <NavLink
                    to="/" className={({ isActive }) =>
                    `header_link ${isActive ? "is-active" : ""}`}>
                    Accueil
                </NavLink>
                <NavLink
                    to="/about" className={({ isActive }) =>
                    `header_link ${isActive ? "is-active" : ""}`}>
                    A propos
                </NavLink>
                <NavLink
                    to="/contact" className={({ isActive }) =>
                    `header_link ${isActive ? "is-active" : ""}`}>
                    Contact
                </NavLink>
            </nav>

        </header>

    )
}