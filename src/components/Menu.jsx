import { NavLink } from "react-router-dom";

export default function Menu() {
    const PATH = "/artist-web-app";
    return (
        <nav className="menu">
            <ul>
                <li><NavLink to={`${PATH}/`} className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
                <li><NavLink to={`${PATH}/photo`} className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Photographie</NavLink></li>
                <li><NavLink to={`${PATH}/expo`} className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Expositions</NavLink></li>
                <li><NavLink to={`${PATH}/collectif`} className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Collectif</NavLink></li>
                <li><NavLink to={`${PATH}/contact`} className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}