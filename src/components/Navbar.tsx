import React from 'react'
import logo from '../assets/logo_transparent.png';
import { Link } from 'react-scroll';

interface NavbarProps {
    wrapperClasses? : string;
    links : {id: string, title: string}[];
}
export const Navbar: React.FC<NavbarProps> = (props) => {
    const {wrapperClasses, links} = props;
    return (
        <nav className={wrapperClasses}>
            <img src={logo} width="50" height="50" alt="sharkzLogo" className="m-10 justify-self-start flex"/>
            <ul className="sm:flex justify-end flex-1">
                {links.map((link) => (
                    <li>
                        <Link activeClass="active" className={link.id} to={link.id} spy={true} smooth={true} duration={500}>
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
