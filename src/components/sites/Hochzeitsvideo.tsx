import React from 'react'
import hz1 from "../../assets/Hochzeit_01_02.jpg"
import hz2 from "../../assets/Hochzeit_02.jpg"
import hz3 from "../../assets/Hochzeit_03.jpg"
import hz4 from "../../assets/Hochzeit_04.jpg"
import hz5 from "../../assets/Hochzeit_05.jpg"
import hz6 from "../../assets/Hochzeit_06.jpg"
export const Hochzeitsvideo: React.FC = () => {
    return (
        <div className="bg-lightRosa py-24 sm:py-32" id="team">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8">
                <div className="max-w-6xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hochzeitsvideo</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Tauchen Sie ein in die emotionale Welt der Liebe und Romantik, während wir die schönsten Momente Ihres besonderen Tages einfangen und in zeitlose Erinnerungen verwandeln.

                    </p>
                    <p className="text-lg leading-8 text-gray-600">
                        Unsere Hochzeitsvideos sind mehr als nur Aufnahmen - sie sind gefühlvolle Erinnerungen an den schönsten Tag in Ihrem Leben. Mit professioneller Produktion und einem erfahrenen Team erfassen wir jeden Augenblick, damit Sie ihn immer wieder erleben können.
                        Vertrauen Sie uns, um Ihre Liebe und Ihren Glanz in bewegenden Bildern festzuhalten und sie zu zeitlosen Erinnerungen zu machen.
                    </p>
                </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 grid-flow-dense gap-4">
                            <img className="rounded-lg sm:w-96 " src={hz1} alt="" />
                            <img className="rounded-lg sm:w-96" src={hz2} alt="" />
                            <img className="rounded-lg sm:w-96" src={hz3} alt="" />
                            <img className="rounded-lg sm:w-96" src={hz4} alt="" />
                            <img className="rounded-lg sm:w-96" src={hz5} alt="" />
                            <img className="rounded-lg sm:w-96" src={hz6} alt="" />
                        </div>
            </div>
        </div>
    );
};