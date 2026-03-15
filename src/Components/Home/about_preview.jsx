import {Link} from "react-router-dom";
import "../../assets/Style/components/Home/aboutpreview.scss"
export default function Aboutpreview(){
    return (
        <section className="about_preview">

            <div className="about_text">
                <h2>À propos de moi</h2>

                <p>
                    Je suis passionné par le développement web et la création
                    d’interfaces modernes. Je travaille principalement avec
                    React, JavaScript et les technologies web modernes.
                </p>

                <Link to="/about">À propos de moi </Link>
            </div>

        </section>
    )
}