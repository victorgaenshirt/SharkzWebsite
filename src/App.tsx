import {
    BottomBar,
    Dienstleistungen,
    Kontakt, Navbar,
    Pakete, Portfolio,
    Produktionsprozess,
    Studio,
    Team
} from "./components";
import { Element} from 'react-scroll';
const App = () => {

    const HeaderMenu: {id: string, title: string}[] = [
        {id: "dienstleistungen", title:"Dienstleistungen"},
        {id: "pakete", title:"Pakete"},
        {id: "studio", title:"Studio"},
        {id: "team", title:"Team"},
        {id: "portfolio", title:"Portfolio"},
        {id: "produktionsprozess", title:"Produktionsprozess"},
    ];

    return (
            <div>
                <Navbar links={HeaderMenu}/>
                {/*<Element name="home" className="element">
                    <Home  wrapperClasses="w-full"/>
                </Element>*/}
                <Element name="dienstleistungen">
                    <Dienstleistungen/>
                </Element>
                <Element name="pakete">
                    <Pakete/>
                </Element>
                <Element name="studio">
                    <Studio/>
                </Element>
                <Element name="team">
                    <Team/>
                </Element>
                <Element name="portfolio">
                    <Portfolio />
                </Element>
                <Element
                    name="produktionsprozess"
                    id="produktionsprozess">
                    <Produktionsprozess/>
                </Element>
                <Kontakt />
                <BottomBar/>
           </div>

    )
        }
export default App
