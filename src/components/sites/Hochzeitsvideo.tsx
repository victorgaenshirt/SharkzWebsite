import React from 'react'

import hz3 from "../../assets/Hochzeit_12.jpg"
import hz7 from "../../assets/hochzeit.jpg"
import hz9 from "../../assets/blumenm.jpg"
import hochzeitVideo from "../../assets/Hochzeit_02.mp4"

export const Hochzeitsvideo: React.FC = () => {
    return (
        <div className="bg-lightRosa py-24 sm:py-32" id="team">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
                <div className="max-w-6xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hochzeitsvideo</h2>
                    <video autoPlay muted controls={true} className={"mt-6 w-full mx-auto"}>
                        <source src={hochzeitVideo} type="video/mp4" />
                    </video>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Tauchen Sie ein in die emotionale Welt der Liebe und Romantik, während wir die schönsten Momente Ihres besonderen Tages einfangen und in zeitlose Erinnerungen verwandeln.
                    </p>
                    <p className="text-lg leading-8 text-gray-600">
                        Unsere Hochzeitsvideos sind mehr als nur Aufnahmen - sie sind gefühlvolle Erinnerungen an den schönsten Tag in Ihrem Leben. Mit professioneller Produktion und einem erfahrenen Team erfassen wir jeden Augenblick, damit Sie ihn immer wieder erleben können.
                        Vertrauen Sie uns, um Ihre Liebe und Ihren Glanz in bewegenden Bildern festzuhalten und sie zu zeitlosen Erinnerungen zu machen.
                    </p>
                </div>
                <div className={"flex max-w-7xl mx-auto"}>
                    <div className={"flex-col w-3/5 pr-6 h-full"}>
                        <img className=" pb-6" src={hz9} alt="" />
                        <img className="" src={hz7} alt="" />
                    </div>
                    <div className={"w-2/5 h-full"}>
                        <img className="flex flex-1" src={hz3} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};