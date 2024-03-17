import React from "react";

export const SocialMedia:React.FC = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <p className="text-left text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">
                        Social Media Content
                    </p>
                    <p className="text-left my-3 text-gray-600 text-lg leading-relaxed sm:my-6">
                        Entdecke mit Sharkz Media die Kraft effektiver Social Media Videos!
                    </p>
                    <div className="my-8 mx-auto grid grid-cols-2 gap-3">
                        <img src={"assets/Yasmin_02.jpg"} className={""}></img>
                        <video autoPlay muted loop={true} >
                            <source src={"assets/Convers_Abspann_Hochformat_2.mp4"} type="video/mp4" />
                        </video>
                    </div>
                    <p className="text-left my-3 text-gray-600 sm:my-6 text-lg leading-relaxed ">
                        Unsere maßgeschneiderten Inhalte sind darauf ausgerichtet, deine Zielgruppe anzusprechen und
                        deine Botschaft effektiv zu verbreiten.</p>
                    <div className="my-8 mx-auto grid grid-cols-2 gap-3">
                        <video autoPlay muted loop={true} >
                            <source src={"assets/brigitte.mp4"} type="video/mp4" />
                        </video>
                        <img src={"assets/Birg_02.jpg"} className={""}></img>
                    </div>
                        <p className="text-left my-3 text-gray-600 text-lg leading-relaxed sm:my-6">
                        Von unterhaltsamen Kurzvideos bis hin zu informativen
                        Clips - wir bringen deine Marke auf Social Media zum Strahlen. Lass uns gemeinsam deine Präsenz
                        in den sozialen Medien stärken und deine Inhalte zum Leben erwecken!
                        </p>
                </div>
            </div>
        </div>
    )
}