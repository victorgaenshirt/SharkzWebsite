
import { Element} from 'react-scroll';
import {navLinks} from "./constants";
import {BottomBar, Dienstleistungen, Home, Kontakt, Navbar, Team, Vorteile} from "./components";
import {Pakete} from "./components/home/Pakete.tsx";
import {SocialBar} from "./components/SocialBar.tsx";
const App = () => {

    return (
            <div>
                <Navbar links={navLinks}/>
                <Element name="home" className="element">
                    <Home />
                </Element>
                <Element name="vorteile">
                    <Vorteile/>
                </Element>
                <Element name="team">
                    <Team/>
                </Element>
                <Element name="dienstleistungen">
                    <Dienstleistungen/>
                </Element>
                <Element name={"pakete"} >
                    <Pakete />
                </Element>
                <Element name={"kontakt"} >
                    <Kontakt />
                </Element>
                <BottomBar/>
                <SocialBar />
           </div>

    )
        }
export default App
