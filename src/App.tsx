import {Dienstleistungen, FAQ, Kontakt, Pakete, Team} from "./components";
import React from "react";
const App:React.FC = () => {

    return (
            <div>
                <Dienstleistungen/>
                <Pakete />
                <Team/>
                <Kontakt />
                <FAQ />
           </div>

    )
        }
export default App
