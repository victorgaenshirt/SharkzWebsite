import React from "react";

import shoes from "../../assets/Convers_Abspann_Hochformat_2.mp4"
import yasmin from "../../assets/Yasmin_02.jpg"
import b2 from "../../assets/brigitte.mp4"
import b1 from "../../assets/Birg_02.jpg"


export const SocialMedia:React.FC = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <p className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Social Media Content
                    </p>
                    <p className="text-sm sm:text-2xl leading-relaxed text-left text-gray-600 my-6">
                        Entdecke mit Sharkz Media die Kraft effektiver Social Media Videos!
                    </p>
                    <div className="my-8 mx-auto grid grid-cols-2 gap-3">
                        <img src={yasmin} className={""}></img>
                        <video autoPlay muted loop={true} >
                            <source src={shoes} type="video/mp4" />
                        </video>
                    </div>
                    <p className="text-sm sm:text-2xl leading-relaxed text-left text-gray-600 my-6">
                        Unsere maßgeschneiderten Inhalte sind darauf ausgerichtet, deine Zielgruppe anzusprechen und
                        deine Botschaft effektiv zu verbreiten.</p>
                    <div className="my-8 mx-auto grid grid-cols-2 gap-3">
                        <video autoPlay muted loop={true} >
                            <source src={b2} type="video/mp4" />
                        </video>
                        <img src={b1} className={""}></img>
                    </div>
                        <p className="text-sm sm:text-2xl leading-relaxed text-left text-gray-600 my-6">
                        Von unterhaltsamen Kurzvideos bis hin zu informativen
                        Clips - bringen deine Marke auf Social Media zum Strahlen. Lass uns gemeinsam deine Präsenz
                        in den sozialen Medien stärken und deine Inhalte zum Leben erwecken!
                        </p>
                </div>
            </div>
        </div>
    )
}