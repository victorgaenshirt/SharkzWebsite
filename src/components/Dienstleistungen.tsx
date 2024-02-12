import React from 'react'
import {Link} from "react-scroll";

export const Dienstleistungen: React.FC = () => {
    const cardStyle = "w-96 h-56 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
    return (
        <div className="flex flex-col bg-dimWhite mx-auto px-auto">
            <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold sm:text-4xl text-2xl text-gray-800 font-poppins">
                Dienstleistungen
            </h1>

            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mx-2">
                    <div className="inline-block px-3">
                        <div className={cardStyle}>
                            <div>hallo</div>
                        </div>
                    </div>
                    <div className="inline-block px-3">
                        <div className={cardStyle}>
                        </div>
                    </div>
                    <div className="inline-block px-3">
                        <div className={cardStyle}>
                        </div>
                    </div>
                    <div className="inline-block px-3">
                        <div className={cardStyle}>
                        </div>
                    </div>
                <div className="flex py-5 font-bold text-3xl text-primary m-5">
                    <Link
                        activeClass="active"
                        to={"/portfolio"}
                        className="cursor-pointer text-gray-800"
                        spy={true}
                        smooth={true}
                        duration={100}
                        offset={10}
                        isDynamic={true}
                    >
                        ... hier gehts zum Portfolio
                    </Link>
                </div>
            </div>

        </div>
    );
};