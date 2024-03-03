import React from 'react'

export const Hochzeitsvideo: React.FC = () => {
    return (
        <div className="bg-lightRosa py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-left text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Hochzeitsvideo</h2>
                    <video autoPlay muted loop controls={true} className={"mt-6 w-full mx-auto"}>
                        <source src={"assets/Hochzeitreel_07.mp4"} type="video/mp4" />
                    </video>
                    <p className="text-left my-3 text-lg leading-relaxed sm:my-6">
                        Tauchen Sie ein in die emotionale Welt der Liebe und Romantik, während wir die schönsten
                        Momente Ihres besonderen Tages einfangen und in zeitlose Erinnerungen verwandeln.
                    </p>
                    <div className="flex max-w-7xl mx-auto flex-1 items-stretch">
                        <div className="flex-col w-3/5 pr-3">
                            <img className="pb-3" src={"assets/blumenm.jpg"} alt="" />
                            <img src={"assets/hochzeit.jpg"} alt="" />
                        </div>
                        <div className="w-2/5 flex flex-col justify-between">
                            <img className="flex flex-1" src={"assets/Hochzeit_12.jpg"} alt="" />
                        </div>
                    </div>
                <p className="text-left my-3 text-lg leading-relaxed sm:my-6">
                    Mit professioneller Produktion und einem erfahrenen Team erfassen
                    wir jeden Augenblick, damit Sie ihn immer wieder erleben können.
                    Vertrauen Sie uns, um Ihre Liebe und Ihren Glanz in bewegenden Bildern festzuhalten und sie zu
                    zeitlosen Erinnerungen zu machen.
                </p>
                <div className={"grid grid-cols-2 sm:grid-cols-3 gap-3"}>
                    <img src={"assets/Hochzeit_08.jpg"} alt="" />
                    <img src={"assets/Hochzeit_15.jpg"} alt="" />
                    <img src={"assets/Hochzeit_16.1.jpg"} alt="" />
                    <img src={"assets/Hochzeit_14.jpg"} alt="" />
                    <img src={"assets/Hochzeit_17.jpg"} alt="" />
                    <img src={"assets/Hochzeit_19.jpg"} alt="" />
                </div>
                <p className="text-left my-3 text-lg leading-relaxed sm:my-6">
                Unsere Hochzeitsvideos sind mehr als nur Aufnahmen - sie sind gefühlvolle Erinnerungen an den
                schönsten Tag in Ihrem Leben.
                </p>
                <video autoPlay muted loop controls={true} className={"w-full mx-auto"}>
                    <source src={"assets/Hochzeitreel_06.mp4"} type="video/mp4" />
                </video>
            </div>
        </div>
        </div>
    );
};