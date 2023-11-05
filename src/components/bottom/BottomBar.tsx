
import {bottomLinks} from "../../constants";
import React from "react";
import {Link} from "react-router-dom";

interface BottomBarProps {
    wrapperClasses? : string;
}

export const BottomBar: React.FC<BottomBarProps> = (props) => {
    const {wrapperClasses} = props;
    return (
        <div className={wrapperClasses}>
            <ul className="sm:flex flex-1">
                {bottomLinks.map((nav) => (
                    <li key={nav.id}  >
                        <Link className="m-10" to={"/" + nav.id}>
                                {nav.title}
                        </Link>
                    </li>))}
            </ul>
        </div>
    )
}