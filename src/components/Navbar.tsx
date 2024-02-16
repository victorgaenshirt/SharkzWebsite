import React, {useState} from 'react'
import {MenuOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
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
            <nav className="hidden md:flex flex-1">
                <ul className="flex flex-1 justify-evenly bg-primary p-10">
                    {links.map((link) => (
                            <Link
                                to={"/" + link.id}
                                className="cursor-pointer text-dimWhite text-xl font-poppins"
                            >
                                {link.title}
                            </Link>
                    ))}
                </ul>
            </nav>
            <div className={"flex flex-col md:hidden bg-primary"}>
                    <MenuOutlined className={"flex p-3 align text-dimWhite"}  onClick={toggleBMenu}/>
                    {isOpen ?
                            <ul className="flex flex-col p-3">
                                {links.map((link) => (
                                    <Link
                                        to={link.id}
                                        className="cursor-pointer text-dimWhite"
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
