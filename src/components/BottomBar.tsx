import {bottomLinks} from "../constants";
import React from "react";
import {Link} from "react-router-dom";

export const BottomBar: React.FC = () => {
    return (
            <div className={"bg-primary  w-full py-4"}>
                <ul className={"flex flex-1 justify-evenly"}>
                    {bottomLinks.map((nav) => (
                        <Link to={"/" + nav.id}
                              className={"text-white text-sm font-medium t hover:text-offBlue"}>
                            {nav.title}
                        </Link>
                    ))}
                </ul>
            </div>
    )
}