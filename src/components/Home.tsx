import React from "react";
import {Dienstleistungen, FAQ, Kontakt, Pakete, Team, WorkflowTeaser} from "./homeComponents";
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
