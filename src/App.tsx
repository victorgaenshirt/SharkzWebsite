import {
    BottomBar,
    Dienstleistungen,
    Kontakt, Navbar,
    Portfolio,
    Produktionsprozess,
    Team, Vorteile,
} from "./components";
import { Element} from 'react-scroll';
import {navLinks} from "./constants";
const App = () => {

    return (
            <div>
                <Navbar links={navLinks}/>
                {/*<Element name="home" className="element">
                    <Home />
                </Element>*/}
                <Element name="vorteile">
                    <Vorteile/>
                </Element>
                <Element name="dienstleistungen">
                    <Dienstleistungen/>
                </Element>
                <Element name="team">
                    <Team/>
                </Element>
                <Element name="portfolio">
                    <Portfolio />
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
