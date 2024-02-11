import {bottomLinks} from "../../constants";
import React from "react";
import {Link} from "react-router-dom";


export const BottomBar: React.FC = () => {
    return (
        <div className={"bg-white"}>
            <ul className={"tablet:flex flex-1 justify-evenly hidden p-5"}>
                {bottomLinks.map((nav) => (
                        <Link to={"/" + nav.id}>
                                {nav.title}
                        </Link>
                    ))}
            </ul>
            <div className="tablet:hidden flex justify-evenly  p-5">
                <ul className="flex flex-1 flex-col justify-center">
                    {bottomLinks.slice(0, Math.ceil(bottomLinks.length / 2)).map((nav) => (
                            <Link to={"/" + nav.id}>
                                {nav.title}
                            </Link>
                    ))}
                </ul>
                <ul className="flex flex-1 flex-col">
                    {bottomLinks.slice(Math.ceil(bottomLinks.length / 2)).map((nav) => (
                            <Link to={"/" + nav.id}>
                                {nav.title}
                            </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}