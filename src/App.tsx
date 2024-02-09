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

import { Link, Element} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

import logo from "./assets/logo_transparent.png";

const App = () => {



    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    return (
            <div className="flex flex-col">
                <div className="h-24 flex bg-blue-950">
                    <nav className="flex flex-1 items-center w-full">
                        <ul className="flex justify-evenly flex-1">
                            <Link
                                  activeClass="active"
                                  to="dienstleistungen"
                                  className="cursor-pointer"
                                  spy={true}
                                  smooth={true}
                                  duration={100}
                                  offset={10}
                                  isDynamic={true}
                            >
                                Dienstleistungen
                            </Link>
                            <Link
                                activeClass="active"
                                to="pakete"
                                className="cursor-pointer"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={10}
                                isDynamic={true}
                            >
                                Pakete
                            </Link>
                            <Link
                                activeClass="active"
                                to="studio"
                                className="cursor-pointer"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={10}
                                isDynamic={true}
                            >
                                Studio
                            </Link>
                        </ul>
                        <Link
                            activeClass="active"
                            to="home"
                            className="cursor-pointer"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={10}
                            isDynamic={true}
                        >
                            <img src={logo} width="50" height="50" alt="sharkzLogo" className="m-10 justify-self-start flex"/>
                        </Link>
                        <ul className="sm:flex justify-evenly flex-1">
                            <Link
                                activeClass="active"
                                to="team"
                                className="cursor-pointer"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={10}
                                isDynamic={true}
                            >
                                Team
                            </Link>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                className="cursor-pointer"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={10}
                                isDynamic={true}
                            >
                                Portfolio
                            </Link>
                            <Link
                                activeClass="active"
                                to="produktionsprozess"
                                className="cursor-pointer"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={10}
                                isDynamic={true}
                            >
                                Produktionsprozess
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div id={"containerElement"} className=" flex flex-col items-center ">
                    <Element name="home" className="element">
                        <Home  wrapperClasses="w-full"/>
                    </Element>
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
                    <BottomBar wrapperClasses="sm:flex justify-evenly flex-1 m-10"/>
                <a onClick={scrollToTop}>To the top!</a>
                </div>
           </div>

    )
        }
export default App

const contentStyle = "items-center my-40"