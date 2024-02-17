import React from "react";

import shoes from "../../assets/Convers_Abspann_Hochformat_2.mp4"
import yasmin from "../../assets/Yasmin_02.jpg"
import b2 from "../../assets/brigitte.mp4"
import b1 from "../../assets/Birg_02.jpg"


export const SocialMedia:React.FC = () => {
    return (
        <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <p className="mb-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Social Media Content
                    </p>
                    <p className="mx-auto max-w-xl text-2xl leading-8">
                        Entdecke mit Sharkz Media die Kraft effektiver Social Media Videos!
                    </p>
                    <div className="my-8 mx-auto grid grid-cols-2 gap-x-8 gap-y-10 max-w-xl lg:gap-y-16">
                        <img src={yasmin} className={""}></img>
                        <video autoPlay muted loop={true} >
                            <source src={shoes} type="video/mp4" />
                        </video>
                    </div>
                    <div className="max-w-xl mx-auto">
                    <p className="text-2xl leading-8">
                        Unsere maßgeschneiderten Inhalte sind darauf ausgerichtet, deine Zielgruppe anzusprechen und
                        deine Botschaft effektiv zu verbreiten.</p>
                    </div>
                    <div className="my-8 mx-auto grid grid-cols-2 gap-x-8 gap-y-10 max-w-xl lg:gap-y-16">
                        <video autoPlay muted loop={true} >
                            <source src={b2} type="video/mp4" />
                        </video>
                        <img src={b1} className={""}></img>
                    </div>
                    <div className="max-w-xl mx-auto">
                        <p className="text-2xl leading-8">
                        Von unterhaltsamen Kurzvideos bis hin zu informativen
                        Clips - bringen deine Marke auf Social Media zum Strahlen. Lass uns gemeinsam deine Präsenz
                        in den sozialen Medien stärken und deine Inhalte zum Leben erwecken!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}