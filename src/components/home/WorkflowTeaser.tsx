import React from 'react'
import {Link} from "react-router-dom";

export const WorkflowTeaser: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-2xl mx-auto py-16 sm:py-24  px-4">
                <div className="text-center">
                    <h1 className="text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">
                        Unsere Workflows sind transparent
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Hier bekommst du einen detaillierten Einblick in unsere Arbeitsabläufe
                    </p>
                    <div className="mt-10 flex items-center justify-center">
                        <Link to={"/workflow"}>
                            <div
                                className={"block w-full disabled:bg-lightBlue rounded-md bg-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm" +
                                    "transition-transform transform-gpu hover:scale-105 focus:outline-none duration-300 ease-in-out"}
                            >
                                Erfahre mehr
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};