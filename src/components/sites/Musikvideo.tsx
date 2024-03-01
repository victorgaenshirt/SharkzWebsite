import React from 'react'

import mv1 from "../../assets/Musikvideo_01.jpg"
import mv2 from "../../assets/Musikvideo_02.jpg"
import mv3 from "../../assets/Musikvideo_03.jpg"
import mv5 from "../../assets/Musikvideo_05.jpg"
import mv6 from "../../assets/Musikvideo_06.jpg"
import mv7 from "../../assets/Musikvideo_07.jpg"
import mv8 from "../../assets/Musikvideo_08.jpg"
import mv9 from "../../assets/Musikvideo_09.jpg"
import mv10 from "../../assets/Musikvideo_10.jpg"
import mv11 from "../../assets/Musikvideo_11.jpg"
import mv12 from "../../assets/Musikvideo_12.jpg"
import mv13 from "../../assets/Musikvideo_13.jpg"
import mv14 from "../../assets/Musikvideo_14.jpg"
import mv15 from "../../assets/Musikvideo_15.jpg"
import cale from "../../assets/Cale.mp4"

export const Musikvideo: React.FC = () => {
    return (
        <div className="bg-lightRosa py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-left text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Musikvideo</h2>
                    <video autoPlay muted loop controls={true} className={"mt-6 w-full mx-auto"}>
                        <source src={cale} type="video/mp4" />
                    </video>
                    <p className="text-left my-3 text-lg leading-relaxed sm:my-6">
                        Kreative Musikvideos, die die Botschaft eines Künstlers oder einer Band visuell zum Leben erwecken.
                    </p>
                    {/*<div className="flex max-w-7xl mx-auto flex-1 items-stretch">
                        <div className="flex-col w-3/5 pr-3">
                            <img className="pb-3" src={hz3} alt="" />
                            <img src={hz2} alt="" />
                        </div>
                        <div className="w-2/5 flex flex-col justify-between">
                            <img className="flex flex-1" src={hz1} alt="" />
                        </div>
                    </div>*/}
                    <div className={"grid grid-cols-2 sm:grid-cols-3 gap-3"}>
                        <img src={mv1} alt="" />
                        <img src={mv3} alt="" />
                        <img src={mv5} alt="" />
                        <img src={mv7} alt="" />
                        <img src={mv8} alt="" />
                        <img src={mv9} alt="" />
                        <img src={mv10} alt="" />
                        <img src={mv11} alt="" />
                        <img src={mv12} alt="" />
                        <img src={mv13} alt="" />
                        <img src={mv14} alt="" />
                        <img src={mv15} alt="" />
                    </div>
                    <div className={"grid grid-cols-2 sm:grid-cols-4 gap-3"}>
                    </div>
                    <p className="text-left my-3 text-lg leading-relaxed sm:my-6">
                        Wir bieten maßgeschneiderte Videokonzepte  für Künstler und Bands, um ihre Musik visuell zum
                        Leben zu erweckenEin Musikvideo dient an erster Stelle zur Visualisierung und Vermarktung eines
                        Liedes. Versetzen Sie ihren Zuschauer in eine von Ihnen gewünschte Atmosphäre und erschaffen
                        Sie zusammen mit Sharkz Media einen einzigartigen Style.
                    </p>
                </div>
            </div>
        </div>
    );
};