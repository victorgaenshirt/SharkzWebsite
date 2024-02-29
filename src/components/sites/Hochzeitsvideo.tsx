import React from 'react'

import hz1 from "../../assets/Hochzeit_12.jpg"
import hz2 from "../../assets/hochzeit.jpg"
import hz3 from "../../assets/blumenm.jpg"
import hz4 from "../../assets/Hochzeit_08.jpg"
import hz5 from "../../assets/Hochzeit_15.jpg"
import hz6 from "../../assets/Hochzeit_16.1.jpg"
import hz7 from "../../assets/Hochzeit_14.jpg"
import hz8 from "../../assets/Hochzeit_17.jpg"
import hz9 from "../../assets/Hochzeit_19.jpg"
import hochzeitVideo from "../../assets/Hochzeitreel_06.mp4"
import hochzeitVideo2 from "../../assets/Hochzeitreel_07.mp4"

export const Hochzeitsvideo: React.FC = () => {
    return (
        <div className="bg-lightRosa py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hochzeitsvideo</h2>
                    <video autoPlay muted loop controls={true} className={"mt-6 w-full mx-auto"}>
                        <source src={hochzeitVideo2} type="video/mp4" />
                    </video>
                    <p className="text-left my-6 text-sm sm:text-2xl leading-relaxed text-gray-600">
                        Tauchen Sie ein in die emotionale Welt der Liebe und Romantik, während wir die schönsten
                        Momente Ihres besonderen Tages einfangen und in zeitlose Erinnerungen verwandeln.
                    </p>
                    <div className="flex max-w-7xl mx-auto flex-1 items-stretch">
                        <div className="flex-col w-3/5 pr-3">
                            <img className="pb-3" src={hz3} alt="" />
                            <img src={hz2} alt="" />
                        </div>
                        <div className="w-2/5 flex flex-col justify-between">
                            <img className="flex flex-1" src={hz1} alt="" />
                        </div>
                    </div>
                <p className="text-sm sm:text-2xl leading-relaxed text-left text-gray-600 my-6">
                    Mit professioneller Produktion und einem erfahrenen Team erfassen
                    wir jeden Augenblick, damit Sie ihn immer wieder erleben können.
                    Vertrauen Sie uns, um Ihre Liebe und Ihren Glanz in bewegenden Bildern festzuhalten und sie zu
                    zeitlosen Erinnerungen zu machen.
                </p>
                <div className={"grid grid-cols-2 sm:grid-cols-3 gap-3"}>
                    <img src={hz4} alt="" />
                    <img src={hz5} alt="" />
                    <img src={hz6} alt="" />
                    <img src={hz7} alt="" />
                    <img src={hz8} alt="" />
                    <img src={hz9} alt="" />
                </div>
                <p className="text-sm sm:text-2xl leading-relaxed text-left text-gray-600 my-6">
                Unsere Hochzeitsvideos sind mehr als nur Aufnahmen - sie sind gefühlvolle Erinnerungen an den
                schönsten Tag in Ihrem Leben.
                </p>
                <video autoPlay muted loop controls={true} className={"w-full mx-auto"}>
                    <source src={hochzeitVideo} type="video/mp4" />
                </video>
            </div>
        </div>
        </div>
    );
};