import {bottomLinks} from "../constants";
import React from "react";
import {Link} from "react-router-dom";

export const BottomBar: React.FC = () => {
    return (
            <div className={"bg-primary  w-full py-4 mx-auto"}>
                <div className={"grid-cols-2 sm:grid-cols-1 mx-auto text-center"}>
                        <Link to={"/" + bottomLinks[0].id}>
                            <p className={"text-white font-customFont hover:text-offBlue"}>{bottomLinks[0].title}</p>
                        </Link>
                        <p className="text-offBlue font-customFont text-sm">
                            Copyright © by Sharkz Media
                        </p>
                </div>
            </div>
    )
}