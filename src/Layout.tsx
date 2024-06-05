import {ReactNode, useEffect, useState} from 'react';
import {BottomBar} from "./components";
import {Link, useLocation} from "react-router-dom";
import {Header} from "./components/Header.tsx";
import {CookieConsent} from "react-cookie-consent";
import TagManager from 'react-gtm-module';
import ReactGA from "react-ga4";
import ReactPixel from 'react-facebook-pixel';

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();

    useEffect(() => {
        // Scrollen zum Anfang des Dokuments, wenn sich die Route ändert
        window.scrollTo(0, 0);
    }, [location]);

    const [cookieAgreed, setCookieAgreed] = useState(false)

    const tagManagerArgs = {
        gtmId: 'GTM-W526BLLJ'
    }
    const gaID = 'G-XNVP4DT91P'

    if(cookieAgreed) {
        TagManager.initialize(tagManagerArgs);
        ReactGA.initialize(gaID);
        ReactPixel.init('394227786851380');
    }

    return (
        <div className={"min-h-screen"}>
            <CookieConsent
                location="bottom"
                buttonText="Annehmen"
                declineButtonText="Nur Notwendige"
                enableDeclineButton
                onAccept={() => {setCookieAgreed(true)}}
                onDecline={() => {setCookieAgreed(false)}}
                style={{ background: "#2B373B" }}
                buttonStyle={{backgroundColor: "#103d98", color: "#fff" }}
                declineButtonStyle={{backgroundColor: "#831b1b", color: "#fff" }}
                expires={100}
                flipButtons
            >
                Diese Website nutzt Cookies. Weitere Informationen dazu findest du
                <Link className="text-lightBlue" to={"/impressum"}> hier</Link>
            </CookieConsent>
            <Header />
            {children}
            <BottomBar />
        </div>
    );
};

export default Layout;