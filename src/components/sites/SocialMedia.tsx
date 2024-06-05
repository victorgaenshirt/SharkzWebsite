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
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Yasmin_02.jpg?alt=media&token=fd34813f-23ea-4fa7-b372-6c171d761c75" className={""}></img>
                        <video
                            autoPlay
                            muted
                            loop={true}
                            preload="auto"
                        >
                            <source src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Convers_Abspann_Hochformat_2.mp4?alt=media&token=df9f5be4-29cb-409a-89d7-36c9cc9191ec" type="video/mp4" />
                        </video>
                    </div>
                    <p className="text-left my-3 text-gray-600 sm:my-6 text-lg leading-relaxed ">
                        Unsere maßgeschneiderten Inhalte sind darauf ausgerichtet, deine Zielgruppe anzusprechen und
                        deine Botschaft effektiv zu verbreiten.</p>
                    <div className="my-8 mx-auto grid grid-cols-2 gap-3">
                        <video
                            autoPlay
                            muted
                            loop={true}
                            preload="auto"
                        >
                            <source src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/brigitte.mp4?alt=media&token=437bcd68-788c-4a9b-a2fb-7e3cf5fe339a" type="video/mp4" />
                        </video>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Birg_02.jpg?alt=media&token=33571e1b-3a23-4353-80d3-373717edb860"} className={""}></img>
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