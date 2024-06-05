import React from "react";
import {Dienstleistungen, FAQ, Kontakt, Pakete, Team, WorkflowTeaser} from "./homeComponents";
const Home:React.FC = () => {


    return (
            <div>
                <Dienstleistungen/>
                <Team/>
                <Kontakt />
                <FAQ />
                <WorkflowTeaser />
           </div>
    )
}
export default Home
