import React from 'react'

export const Musikvideo: React.FC = () => {
    return (
        <div className="bg-lightestBlue py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-left text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Musikvideo</h2>
                    <video autoPlay muted loop controls={true} className={"mt-6 w-full mx-auto"}>
                        <source src={"assets/Musikvideoreel_01.mp4"} type="video/mp4" />
                    </video>
                    <p className="text-left my-3 text-lg text-gray-600 leading-relaxed sm:my-6">
                        Kreative Musikvideos, die die Botschaft eines Künstlers oder einer Band visuell zum Leben erwecken.
                    </p>
                    <div className={"grid grid-cols-2 sm:grid-cols-3 gap-3"}>
                        <img src={"assets/Musikvideo_05.jpg"} alt="" />
                        <img src={"assets/Musikvideo_01.jpg"} alt="" />
                        <img src={"assets/Musikvideo_03.jpg"} alt="" />
                        <img src={"assets/Musikvideo_08.jpg"} alt="" />
                        <img src={"assets/Musikvideo_09.jpg"} alt="" />
                        <img src={"assets/Musikvideo_07.jpg"} alt="" />

                    </div>
                    <div className={"grid grid-cols-2 sm:grid-cols-4 gap-3"}>
                    </div>
                    <p className="text-left my-3 text-lg text-gray-600 leading-relaxed sm:my-6">
                        Wir bieten maßgeschneiderte Videokonzepte  für Künstler und Bands, um deine Musik visuell zum
                        Leben zu erwecken. Ein Musikvideo dient an erster Stelle zur Visualisierung und Vermarktung eines
                        Liedes.
                    </p>
                    <video autoPlay muted loop controls={true} className={"mt-6 w-full mx-auto"}>
                        <source src={"assets/Cale.mp4"} type="video/mp4" />
                    </video>
                    <p className="text-left my-3 text-lg text-gray-600 leading-relaxed sm:my-6">
                    Versetze deine Zuschauer in eine von dir gewünschte Atmosphäre und erschaffe
                        zusammen mit Sharkz Media einen einzigartigen Style.
                    </p>

                    <div className={"grid grid-cols-2 sm:grid-cols-3 gap-3 my-3 sm:my-6"}>
                        <img src={"assets/Musikvideo_06.jpg"} alt="" />
                        <img src={"assets/Musikvideo_11.jpg"} alt="" />
                        <img src={"assets/Musikvideo_12.jpg"} alt="" />
                        <img src={"assets/Musikvideo_13.jpg"} alt="" />
                        <img src={"assets/Musikvideo_14.jpg"} alt="" />
                        <img src={"assets/Musikvideo_15.jpg"} alt="" />
                    </div>
                    </div>
            </div>
        </div>
    );
};