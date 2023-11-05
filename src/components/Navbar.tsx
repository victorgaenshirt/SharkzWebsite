import React from 'react'
import {navLinks} from "../constants";
import logo from '../assets/logo_transparent.png';
import { Link } from 'react-scroll';

interface NavbarProps {
    wrapperClasses? : string;
}
export const Navbar: React.FC<NavbarProps> = (props) => {
    const {wrapperClasses} = props;
    return (
        <nav className={wrapperClasses}>
            <img src={logo} width="50" height="50" alt="sharkzLogo" className="m-10 justify-self-start flex"/>
            <ul className="sm:flex justify-end flex-1">
                {navLinks.map((nav) => (
                    <li key={nav.id} >
                        <Link to={nav.id} smooth={true} duration={500}>
                            {nav.title}
                        </Link>
                    </li>))}
            </ul>
        </nav>
    );
};