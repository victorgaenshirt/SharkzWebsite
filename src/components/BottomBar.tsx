import {bottomLinks} from "../constants";
import React from "react";
import {Link} from "react-router-dom";

export const BottomBar: React.FC = () => {
    return (
            <div className={"bg-primary w-full mx-auto"}>
                <div className={"grid-cols-3 sm:grid-cols-3 mx-auto text-center"}>
                        <Link to={"/" + bottomLinks[1].id}>
                            <p className={"text-white font-customFont text-sm sm:text-lg hover:text-offBlue tracking-wide pt-4"}>{bottomLinks[1].title}</p>
                        </Link>
                        <Link to={"/" + bottomLinks[0].id}>
                            <p className={"text-white font-customFont text-sm sm:text-lg hover:text-offBlue tracking-wide "}>{bottomLinks[0].title}</p>
                        </Link>
                        <p className="text-offBlue font-customFont tracking-widest sm:text-sm text-xs pb-4 pt-4">
                            Copyright © by Sharkz Media
                        </p>
                </div>
            </div>
    )
}