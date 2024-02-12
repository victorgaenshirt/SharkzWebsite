import {
    BottomBar,
    Dienstleistungen, Home,
    Kontakt, Navbar,
    Produktionsprozess,
    Team, Vorteile,
} from "./components";
import { Element} from 'react-scroll';
import {navLinks} from "./constants";
import coverFoto from "./assets/coverFoto.jpg";
const App = () => {

    return (
            <div>
                <Navbar links={navLinks}/>
                <img src={coverFoto} alt="sharkzLogo"
                     className="justify-self-start flex w-full"/>
                <Element name="vorteile">
                    <Vorteile/>
                </Element>
                <Element name="home" className="element">
                    <Home />
                </Element>

                <Element name="dienstleistungen">
                    <Dienstleistungen/>
                </Element>
                <Element name="team">
                    <Team/>
                </Element>
                <Element
                    name="produktionsprozess" >
                    <Produktionsprozess/>
                </Element>
                <Element name={"kontakt"} >
                    <Kontakt />
                </Element>
                <BottomBar/>
           </div>

    )
        }
export default App
