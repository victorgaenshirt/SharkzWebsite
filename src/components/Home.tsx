import {Dienstleistungen, FAQ, Kontakt, Pakete, Team, WorkflowTeaser} from "./components";
import React from "react";
const Home:React.FC = () => {
    return (
            <div>
                <Dienstleistungen/>
                <Pakete />
                <Team/>
                <Kontakt />
                <WorkflowTeaser />
                <FAQ />
           </div>
    )
        }
export default Home
