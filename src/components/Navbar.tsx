import React, {useState} from 'react'
import { Link } from 'react-scroll';
import {MenuOutlined} from "@ant-design/icons";
interface NavbarProps {
    wrapperClasses? : string;
    links : {id: string, title: string}[];
}
export const Navbar: React.FC<NavbarProps> = (props) => {
    const {links} = props;
    const [isOpen, setIsOpen] = useState(false)
    const toggleBMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <nav className="hidden sm:flex flex-1">
                <ul className="flex flex-1 justify-evenly bg-primary p-10">
                    {links.map((link) => (
                            <Link
                                activeClass="active"
                                to={link.id}
                                className="cursor-pointer text-dimWhite text-xl font-poppins"
                                spy={true}
                                smooth={true}
                                duration={100}
                                offset={10}
                                isDynamic={true}
                            >
                                {link.title}
                            </Link>
                    ))}
                </ul>
            </nav>
            <div className={"flex flex-col sm:hidden bg-primary"}>
                    <MenuOutlined className={"flex p-3 align text-dimWhite"}  onClick={toggleBMenu}/>
                    {isOpen ?
                            <ul className="flex flex-col p-3">
                                {links.map((link) => (
                                    <Link
                                        activeClass="active"
                                        to={link.id}
                                        className="cursor-pointer text-dimWhite"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        offset={10}
                                        isDynamic={true}
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </ul>
                        : <div/>}
            </div>
        </div>
    );
};
