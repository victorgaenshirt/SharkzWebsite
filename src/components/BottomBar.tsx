import {bottomLinks} from "../constants";
import React from "react";
import {Link} from "react-router-dom";


export const BottomBar: React.FC = () => {
    return (
        <div className={"bg-primary"}>
            <ul className={"sm:flex flex-1 justify-evenly hidden p-5"}>
                {bottomLinks.map((nav) => (
                        <Link to={"/" + nav.id}
                              className={"text-dimWhite"}>
                                {nav.title}
                        </Link>
                    ))}
            </ul>
            <div className="sm:hidden flex justify-evenly  p-5">
                <ul className="flex flex-col flex-1">
                    {bottomLinks.slice(0, Math.ceil(bottomLinks.length / 2)).map((nav) => (
                            <Link to={"/" + nav.id}
                                  className={"flex justify-center text-dimWhite text-xs m-1"}>
                                {nav.title}
                            </Link>
                    ))}
                </ul>
                <ul className="flex flex-col flex-1">
                    {bottomLinks.slice(Math.ceil(bottomLinks.length / 2)).map((nav) => (
                            <Link to={"/" + nav.id}
                                className={"flex justify-center text-dimWhite text-xs m-1"}>
                                {nav.title}
                            </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}