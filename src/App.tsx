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

import { Link, Element, Events, animateScroll, scrollSpy } from 'react-scroll';
import logo from "./assets/logo_transparent.png";
import {useEffect} from "react";

const App = () => {
    useEffect(() => {

        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', to, element);
        });

        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', to, element);
        });

        // Updating scrollSpy when the component mounts.
        scrollSpy.update();

        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const options = {
        // your options here, for example:
        duration: 500,
        smooth: true,
    };

    const scrollToTop = () => {
        animateScroll.scrollToTop(options);
    };

    const scrollToBottom = () => {
        animateScroll.scrollToBottom();
    };

    const scrollTo = () => {
        animateScroll.scrollTo(100); // Scrolling to 100px from the top of the page.
    };

    const scrollMore = () => {
        animateScroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
    };

    // Function to handle the activation of a link.
    const handleSetActive = (to) => {
        console.log(to);
    };


    return (
            <div className="h-screen w-screen flex flex-col bg-primary overflow-y-auto">
                <div className="h-24 flex bg-blue-950">
                    <nav className="flex flex-1 items-center">
                        <ul className="sm:flex justify-evenly flex-1">
                            <Link className="cursor-pointer" activeClass="active" to="dienstleistungen" spy={true} smooth={true} duration={500}>
                                Dienstleistungen
                            </Link>
                            <Link to="pakete" className="cursor-pointer" activeClass="active" spy={true} smooth={true} duration={500}>
                                Pakete
                            </Link>
                            <Link className="cursor-pointer" activeClass="active" to="studio" spy={true} smooth={true} duration={500}>
                                Studio
                            </Link>
                        </ul>
                        <Link className="cursor-pointer" activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                            <img src={logo} width="50" height="50" alt="sharkzLogo" className="m-10 justify-self-start flex"/>
                        </Link>
                        <ul className="sm:flex justify-evenly flex-1">
                            <Link className="cursor-pointer" activeClass="active" to="team" spy={true} smooth={true} duration={500}>
                                Team
                            </Link>
                            <Link className="cursor-pointer" activeClass="active" to="portfolio" spy={true} smooth={true} duration={50}>
                                Portfolio
                            </Link>
                            <Link className="cursor-pointer" activeClass="active" to="produktionsprozess" spy={true} smooth={true} duration={500}>
                                Produktionsprozess
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className="overflow-y-auto flex flex-col items-center">
                    <Element name="home" className="element snap-start">
                        <Home  wrapperClasses="col"/>
                    </Element>
                    <Element name="dienstleistungen" className="element snap-start">
                        <Dienstleistungen id={"dienstleistungen"} wrapperClasses={contentStyle}/>
                    </Element>
                    <Element name="pakete" className="element snap-start">
                        <Pakete id={"pakete"} wrapperClasses={contentStyle}/>
                    </Element>
                    <Element name="studio" className="element snap-start">
                        <Studio id={"studio"} wrapperClasses={contentStyle}/>
                    </Element>
                    <Element name="team" className="element snap-start">
                        <Team  id={"team"} wrapperClasses={contentStyle}/>
                    </Element>
                    <Element name="portfolio" className="element snap-start">
                        <Portfolio />
                    </Element>
                    <Element name="produktionsprozess" className="element snap-start">
                        <Produktionsprozess id={"produktionsprozess"} wrapperClasses={contentStyle}/>
                    </Element>
                    <Kontakt />
                    <BottomBar wrapperClasses="sm:flex justify-evenly flex-1 m-10"/>
                <a onClick={scrollToTop}>To the top!</a>
                <br/>
                <a onClick={scrollToBottom}>To the bottom!</a>
                <br/>
                <a onClick={scrollTo}>Scroll to 100px from the top</a>
                <br/>
                <a onClick={scrollMore}>Scroll 100px more from the current position!</a>
                </div>
           </div>

    )
        }
export default App

const contentStyle = "items-center my-40"