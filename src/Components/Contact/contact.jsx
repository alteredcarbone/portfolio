import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../assets/Style/components/Contact/contact.scss";

import github from "../../assets/Style/icon/github.png";
import instagram from "../../assets/Style/icon/instagram.png";
import twitter from "../../assets/Style/icon/twitter.png";
import linkedin from "../../assets/Style/icon/linkedin.png";

export default function Contact() {
    const form = useRef(null);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();

        setIsSending(true);
        setIsSent(false);
        setHasError(false);
        setStatus("");

        try {
            await emailjs.sendForm(
                "service_hvxe3vc",
                "template_4h1x7gf",
                form.current,
                {
                    publicKey: "jMHIT9Er8m6F-Ggh4",
                }
            );

            setIsSent(true);
            form.current.reset();

            setTimeout(() => {
                setIsSent(false);
                setStatus("");
            }, 3000);
        } catch (error) {
            setHasError(true);
            setStatus("Une erreur est survenue pendant l'envoi.");
            console.error(error);

            setTimeout(() => {
                setHasError(false);
            }, 3000);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="contact">
            <div className="contact_layout">
                <div className="contact_container">
                    <h1>Contact</h1>
                    <p>Tu peux me laisser un message ici.</p>

                    <form ref={form} onSubmit={sendEmail} className="contact_form">
                        <div className="form_row">
                            <div className="form_group">
                                <label htmlFor="last_name">Nom</label>
                                <input
                                    id="last_name"
                                    type="text"
                                    name="last_name"
                                    placeholder="Ton nom"
                                    required
                                />
                            </div>

                            <div className="form_group">
                                <label htmlFor="first_name">Prénom</label>
                                <input
                                    id="first_name"
                                    type="text"
                                    name="first_name"
                                    placeholder="Ton prénom"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form_group">
                            <label htmlFor="company">Entreprise</label>
                            <input
                                id="company"
                                type="text"
                                name="company"
                                placeholder="Nom de l'entreprise"
                            />
                        </div>

                        <div className="form_group">
                            <label htmlFor="user_email">Adresse email</label>
                            <input
                                id="user_email"
                                type="email"
                                name="user_email"
                                placeholder="Adresse Mail"
                                required
                            />
                        </div>

                        <div className="form_group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="7"
                                placeholder="Écris ton message ici..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className={`contact_button ${isSent ? "success" : ""} ${hasError ? "error" : ""}`}
                        >
                            {isSending ? (
                                <>
                                    <span className="spinner"></span>
                                    Envoi...
                                </>
                            ) : isSent ? (
                                "✔ Message envoyé"
                            ) : hasError ? (
                                "✖ Erreur"
                            ) : (
                                "Envoyer"
                            )}
                        </button>

                        {status && <p className="form_status">{status}</p>}
                    </form>
                </div>

                <aside className="contact_social">
                    <h2>Mes réseaux</h2>
                    <p>Tu peux aussi me contacter ici.</p>

                    <a
                        href="https://github.com/alteredcarbone"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={github} alt="GitHub" className="social_logo" />
                    </a>

                    <a
                        href="https://www.instagram.com/maxime_dupont_46/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={instagram} alt="Instagram" className="social_logo" />
                    </a>

                    <a
                        href="https://x.com/altered_carbone"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={twitter} alt="Twitter / X" className="social_logo" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/maxime-dupont-402ab1242/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedin} alt="LinkedIn" className="social_logo" />
                    </a>
                </aside>
            </div>
        </section>
    );
}