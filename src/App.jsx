import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Components/layout/layout.jsx";
import Home from "./Components/Home/home.jsx";
import "../src/assets/Style/global.scss";
import Contact from "./Components/Contact/contact.jsx";
import About from "./Components/About/about.jsx";
import Projects from "./Components/Projects/projects.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Projects" element={<Projects />}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}


