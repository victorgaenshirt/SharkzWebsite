import React from "react";

const produkte1 = [
    {image: "assets/testtinte2.jpg"},
    {image: "assets/testtinte1.jpg"},
    {image: "assets/testtinte3.jpg"},
]

const produkte2 =  [
    {image: "assets/halsband3.jpg"},
    {image: "assets/schuessel.jpg"},
    {image: "assets/halsband2.jpg"}
]

const studio = [
    {image: "assets/studio1.jpg"},
    {image: "assets/studio2.jpg"},
    {image: "assets/studio3.jpg"},
]

export const Produktvideo:React.FC = () => {
    return (
    <div>
        <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <p className="text-left text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">
                        Produktfotos und -videos
                    </p>
                    <p className="text-left mt-6 text-lg text-gray-600 leading-relaxed">
                        Unser erfahrenes Team ist mit unterschiedlichen Materialeigenschaften von Produkten vertraut
                        und beherrscht die Techniken, um diese gekonnt in Szene zu setzen und die besten Aufnahmen zu erzielen.
                        <br/>
                        Wir verstehen die Bedeutung von präziser Kontrolle und Inszenierung, besonders wenn es um komplexe
                        Bewegungen oder Effekte geht, um sicherzustellen, dass Dein Produkt optimal präsentiert wird.
                    </p>
                        <div className="mx-auto my-3 max-w-xs sm:my-6 lg:my-8 sm:max-w-4xl">
                            <dl className="grid grid-cols-1 lg:max-w-none sm:grid-cols-3 gap-3">
                                {produkte1.map((produkt, index) => (
                                    <img key={index} src={produkt.image} alt={"produkt" + index} className={""}></img>
                                ))}
                            </dl>
                        </div>
                        <video autoPlay muted loop={true} className={"w-full mx-auto"}>
                            <source src={"assets/Produktvideo.mp4"} type="video/mp4" />
                        </video>
                        <div className="mx-auto my-3 max-w-xs sm:my-6 sm:max-w-4xl">
                            <dl className="grid grid-cols-1 lg:max-w-none sm:grid-cols-3 gap-3 sm:gap-6">
                                {produkte2.map((produkt, index) => (
                                    <img key={index} src={produkt.image}  alt={"produkt2" + index} className={""}></img>
                                ))}
                            </dl>
                        </div>
                </div>
            </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                <p className="text-left text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">
                        Sharkz Media Studio
                    </p>
                    <p className="text-left my-6 text-lg leading-8 text-gray-600">
                        Unser neues Studio ist für uns eine Werkstatt der Kreativität.  Durch Fachwissen im Bereich
                        Maschinenbau eröffnen sich uns neue Möglichkeiten.
                        Mit unserer Werkbank, können wir unsere eigenen Kameravorrichtungen
                        vor Ort bauen. Mit unserem Gerüst aus Aluprofilen ist es nicht nur möglich Lampen über der
                        Maschine zu montieren, sondern auch eine Vorrichtung anzubringen, mit der wir Dinge in die Mitte
                        der Kulisse fallen lassen können.

                    </p>
                    <div className="mx-auto max-w-xs sm:max-w-4xl">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-3 lg:max-w-none sm:grid-cols-3 sm:gap-y-6">
                            {studio.map((stu, index) => (
                                <img key={index} src={stu.image} alt={"studio" + index} ></img>
                            ))}
                        </dl>
                    </div>
                    <p className="text-left my-6 text-lg leading-8 text-gray-600">
                        Unsere 360-Grad-Kameradrehmaschine bietet vielfältige Vorteile um Produkte aus verschiedenen
                        Perspektiven zu verfilmen. Die Kamera dreht sich um einen festen Punkt, angetrieben von einem
                        Drehstrommotor, der es ermöglicht eine konstant bleibende Geschwindigkeit aufrecht zu erhalten.
                        Auf der gegenüberliegenden Seite befindet sich ein gebogener Hintergrund, der sich synchron bewegt.
                        Die Kamera kann zudem vertikal und horizontal, mithilfe einer pneumatischen Führungsschiene,
                        bewegt werden. Dies eröffnet eine Vielzahl von Gestaltungsmöglichkeiten für außergewöhnliche
                        Kamerafahrten und visuelle Effekte.
                    </p>
                    <video autoPlay muted controls={true} className={"w-full mx-auto"}>
                        <source src={"assets/Studiovideo_03.mp4"} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </div>
    )
}