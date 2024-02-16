import {Dienstleistungen, Home, Kontakt, Pakete, Team, Vorteile} from "./components";
import React from "react";
const App:React.FC = () => {

    return (
            <div>
                <Home />
                <Vorteile/>
                <Team/>
                <Dienstleistungen/>
                <Pakete />
                <Kontakt />
           </div>

    )
        }
export default App
