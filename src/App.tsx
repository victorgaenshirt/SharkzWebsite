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
                <Element name="dienstleistungen" className="element">
                    <Dienstleistungen wrapperClasses={contentStyle}/>
                </Element>
                <Element name="pakete" className="element ">
                    <Pakete wrapperClasses={contentStyle}/>
                </Element>
                <Element name="studio" className="element ">
                    <Studio wrapperClasses={contentStyle}/>
                </Element>
                <Element name="team" className="element ">
                    <Team wrapperClasses={contentStyle}/>
                </Element>
                <Element name="portfolio" className="element ">
                    <Portfolio />
                </Element>
                <Element
                    name="produktionsprozess"
                    id="produktionsprozess">
                    <Produktionsprozess  wrapperClasses={contentStyle}/>
                </Element>
                <Kontakt />
                <BottomBar/>
           </div>

    )
        }
export default App

const contentStyle = "items-center my-40"