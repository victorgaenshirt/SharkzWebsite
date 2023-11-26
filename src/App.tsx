import {
    BottomBar,
    Dienstleistungen,
    Kontakt,
    Pakete, Portfolio,
    Produktionsprozess,
    Studio,
    Team
} from "./components";
import {Home} from "./components/Home.tsx";

import logo from "./assets/logo_transparent.png";
import {useRef} from "react";

const App = () => {
    const dienstleistungen = useRef(null);
    const pakete = useRef(null);
    const studio = useRef(null);
    const home = useRef(null);
    const team = useRef(null);
    const portfolio = useRef(null);
    const produktion = useRef(null);

    const scrollToSection = (elementRef: any) => {
        const element = elementRef.current;

        if (element) {
            const { top } = element.getBoundingClientRect();

            window.scrollTo({
                top: window.scrollY + top,
                behavior: "smooth",
            });

            console.log("clicked");
        }
    };

    return (
            <div className="h-screen w-screen flex flex-col bg-primary">
                <div className="h-24 flex bg-blue-950">
                    <nav className="flex flex-1 items-center">
                        <ul className="sm:flex justify-evenly flex-1">
                            <li onClick={() => scrollToSection(dienstleistungen)} className="link">
                                Dienstleistungen
                            </li>
                            <li onClick={() => scrollToSection(pakete)} className="link">
                                Pakete
                            </li>
                            <li onClick={() => scrollToSection(studio)} className="link">
                                Studio
                            </li>
                        </ul>
                            <li onClick={() => scrollToSection(home)} className="link">
                                <img src={logo} width="50" height="50" alt="sharkzLogo" className="m-10 justify-self-start flex"/>
                            </li>
                        <ul className="sm:flex justify-evenly flex-1">
                            <li onClick={() => scrollToSection(team)} className="link">
                                Team
                            </li>
                            <li onClick={() => scrollToSection(portfolio)} className="link">
                                Portfolio
                            </li>
                            <li onClick={() => scrollToSection(produktion)} className="link">
                                Produktionsprozess
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="overflow-y-auto flex flex-col items-center">
                    <div ref={home} className="home">
                        <Home  wrapperClasses={"w-screen"}/>
                    </div>
                    <div ref={dienstleistungen} className="dienstleistungen">
                        <Dienstleistungen />
                    </div>
                    <div ref={pakete} className="pakete">
                        <Pakete />
                    </div>
                    <div ref={studio} className="studio">
                        <Studio/>
                    </div>
                    <div ref={team} className="team">
                        <Team wrapperClasses={contentStyle}/>
                    </div>
                    <div ref={portfolio} className="portfolio">
                        <Portfolio />
                    </div>
                    <div ref={produktion} className="produktion">
                        <Produktionsprozess />
                    </div>
                    <Kontakt />
                    <BottomBar wrapperClasses="sm:flex justify-evenly flex-1 m-10"/>
                </div>
           </div>

    )
        }
export default App

const contentStyle = "items-center my-40"