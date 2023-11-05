import {
    BottomBar,
    Dienstleistungen,
    Kontakt,
    Navbar,
    Pakete,
    Portfolio, Produktionsprozess,
    Studio,
    Team
} from "./components";
import {Home} from "./components/Home.tsx";

const App = () => {
    return (
            <div className="h-screen w-screen flex flex-col  bg-primary overflow-y-auto">
                <div className="h-24 flex bg-blue-950">
                    <Navbar  wrapperClasses="flex flex-1 items-center m-10"/>
                </div>
                    <div className="overflow-y-auto flex flex-col items-center">
                        <Home id={"home"} wrapperClasses={contentStyle}/>
                        <Dienstleistungen id={"dienstleistungen"} wrapperClasses={contentStyle}/>
                        <Pakete id={"pakete"} wrapperClasses={contentStyle}/>
                        <Studio id={"studio"} wrapperClasses={contentStyle}/>
                        <Team  id={"team"} wrapperClasses={contentStyle}/>
                        <Portfolio id={"portfolio"} wrapperClasses={contentStyle}/>
                        <Produktionsprozess id={"produktionsprozess"} wrapperClasses={contentStyle}/>
                        <Kontakt />
                        <BottomBar wrapperClasses="flex flex-row"/>
                </div>
           </div>

    )
        }
export default App

const contentStyle = "m-10 items-center"

