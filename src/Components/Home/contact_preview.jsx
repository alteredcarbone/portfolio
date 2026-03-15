import {Link} from 'react-router-dom';
import "../../assets/Style/components/Home/contactpreview.scss"

export default function ContactPreview() {
    return (
        <section className="contact_preview">

            <h2>Travaillons ensemble</h2>

            <p>
                Tu as un projet ou une question ?
                N'hésite pas à me contacter.
            </p>

            <Link to="/contact" className="btn_primary">Me contacter</Link>

        </section>
    )
}