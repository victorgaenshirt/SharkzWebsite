import React from "react";
import {Dienstleistungen, FAQ, Kontakt, Team, WorkflowTeaser} from "./homeComponents";
const Home:React.FC = () => {
    return (
            <div>
                <Dienstleistungen/>
                <WorkflowTeaser />
                <Team/>
                <Kontakt />
                <FAQ />
           </div>
    )
        }
export default Home
