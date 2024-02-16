import React from 'react'
import {Link} from "react-router-dom";

export const Pakete: React.FC = () => {
    return (
        <div className="bg-gray-100">
                <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 px-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Überzeuge dich auch von unseren Paketen
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Unsere Pakete bieten klare Preisgestaltung, Effizienz und Flexibilität.
                        </p>
                        <div className="mt-10 flex items-center justify-center">
                            <Link to={"/pakete"}>
                            <a
                                href="#"
                                className="rounded-md bg-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-red hover:bg-dimWhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Erfahre mehr
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
)
};