import React from 'react'

export const Musikvideo: React.FC = () => {
    return (
        <div className="bg-lightestBlue py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-left text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Musikvideo</h2>
                    <video
                        autoPlay
                        muted
                        loop
                        controls={true}
                        className={"mt-6 w-full mx-auto"}
                        preload="auto"
                    >
                        <source src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideoreel_01.mp4?alt=media&token=9590fc1d-09ce-4fcf-8120-9d8f8e4383f6" type="video/mp4" />
                    </video>
                    <p className="text-left my-3 text-lg text-gray-600 leading-relaxed sm:my-6">
                        Kreative Musikvideos, die die Botschaft eines Künstlers oder einer Band visuell zum Leben erwecken.
                    </p>
                    <div className={"grid grid-cols-2 sm:grid-cols-3 gap-3"}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_05.jpg?alt=media&token=aea14779-b856-400e-a1b5-85d0a6cc0f43" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_01.jpg?alt=media&token=eeed8067-0bc8-4529-aebb-26c239f2b750" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_03.jpg?alt=media&token=527b0f8b-cb57-4117-9a4a-aa5dc3017444" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_08.jpg?alt=media&token=262c7b53-8c3b-431d-b697-bb92933966f7" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_09.jpg?alt=media&token=d3a2c209-8f01-449e-bf72-f3549607ea09" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_07.jpg?alt=media&token=0c87fffb-0e27-4074-8c0b-2fc8aa0228e6" alt="" />

                    </div>
                    <div className={"grid grid-cols-2 sm:grid-cols-4 gap-3"}>
                    </div>
                    <p className="text-left my-3 text-lg text-gray-600 leading-relaxed sm:my-6">
                        Wir bieten maßgeschneiderte Videokonzepte  für Künstler und Bands, um deine Musik visuell zum
                        Leben zu erwecken. Ein Musikvideo dient an erster Stelle zur Visualisierung und Vermarktung eines
                        Liedes.
                    </p>
                    <video
                        autoPlay
                        muted
                        loop
                        controls={true}
                        className={"mt-6 w-full mx-auto"}
                        preload="auto"
                    >
                        <source src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Cale.mp4?alt=media&token=3471e3b9-181d-4911-84b4-a1fd85435d8d" type="video/mp4" />
                    </video>
                    <p className="text-left my-3 text-lg text-gray-600 leading-relaxed sm:my-6">
                    Versetze deine Zuschauer in eine von dir gewünschte Atmosphäre und erschaffe
                        zusammen mit Sharkz Media einen einzigartigen Style.
                    </p>

                    <div className={"grid grid-cols-2 sm:grid-cols-3 gap-3 my-3 sm:my-6"}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_06.jpg?alt=media&token=44da1f1d-8b01-4aff-8727-9cf9df21e352" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_11.jpg?alt=media&token=95dd8599-71e3-40a7-941f-d9e384895c5b" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_12.jpg?alt=media&token=9cbd45aa-45e9-4bb5-a519-f64c29af47b4" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_13.jpg?alt=media&token=9347bbe9-aac2-47c1-92f8-cf4aeb425bb3" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_14.jpg?alt=media&token=d669cba5-de6b-4b47-800a-f5c8bd93ce21" alt="" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Musikvideo_15.jpg?alt=media&token=984e6464-8740-4038-bc43-3c8ed10f9695" alt="" />
                    </div>
                    </div>
            </div>
        </div>
    );
};