import {bottomLinks} from "../constants";
import React from "react";
import {Link} from "react-router-dom";

export const BottomBar: React.FC = () => {
    return (
            <div className={"bg-primary w-full mx-auto"}>
                <div className={"grid-cols-3 sm:grid-cols-3 mx-auto text-center pt-6"}>
                        <Link to={"/" + bottomLinks[0].id}>
                            <p className={"text-white font-customFont text-sm sm:text-lg hover:text-offBlue tracking-wide"}>{bottomLinks[0].title}</p>
                        </Link>
                        <p className="text-offBlue font-customFont tracking-widest sm:text-sm text-xs pb-4">
                            Copyright © by Sharkz Media
                        </p>
                </div>
                <img alt="Headerdesign" src={"assets/Headerdesign_03.png"}/>
            </div>
    )
}