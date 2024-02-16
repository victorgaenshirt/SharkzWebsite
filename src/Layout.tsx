import {ReactNode, useEffect} from 'react';
import {BottomBar} from "./components";
import {useLocation} from "react-router-dom";
import {Header} from "./components/Header.tsx";

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
        <div className={"min-h-screen"}>
            <Header />
            {children}
            <BottomBar />
        </div>
    );
};

export default Layout;