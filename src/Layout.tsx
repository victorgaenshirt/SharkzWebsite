import {ReactNode, useEffect} from 'react';
import {BottomBar, Navbar, SocialBar} from "./components";
import {navLinks} from "./constants";
import {useLocation} from "react-router-dom";

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();

    useEffect(() => {
        // Scrollen zum Anfang des Dokuments, wenn sich die Route ändert
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div>
            <Navbar links={navLinks} />
            {children}
            <BottomBar />
            <SocialBar />
        </div>
    );
};

export default Layout;