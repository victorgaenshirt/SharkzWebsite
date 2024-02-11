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
            <nav className="hidden tablet:flex flex-1">
                <ul className="flex flex-1 justify-evenly bg-white p-5">
                    {links.map((link) => (
                            <Link
                                activeClass="active"
                                to={link.id}
                                className="cursor-pointer"
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
            <div className={"flex flex-col tablet:hidden"}>
                <div className={"flex flex-1 bg-primary  p-5"}>
                        <MenuOutlined className={"justify-start"}  onClick={toggleBMenu}/>
                </div>
                    {isOpen ?
                            <ul className="flex flex-1 flex-col justify-evenly bg-white p-5">
                                {links.map((link) => (
                                    <Link
                                        activeClass="active"
                                        to={link.id}
                                        className="cursor-pointer"
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
