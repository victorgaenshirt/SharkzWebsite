import {Dienstleistungen, FAQ, Kontakt, Pakete, Team} from "./components";
import React from "react";
const App:React.FC = () => {

    return (
            <div>
                <Team/>
                <Dienstleistungen/>
                <Pakete />
                <Kontakt />
                <FAQ />
           </div>

    )
        }
export default App
