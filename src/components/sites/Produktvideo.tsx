import React from "react";
import testtinte1 from "../../assets/testtinte1.jpg";
import testtinte2 from "../../assets/testtinte2.jpg";
import testtinte3 from "../../assets/testtinte3.jpg";
import halsband1 from "../../assets/halsband1.jpg";
import halsband2 from "../../assets/halsband2.jpg";
import halsband3 from "../../assets/halsband3.jpg";
import studio1 from "../../assets/studio1.jpg";
import studio2 from "../../assets/studio2.jpg";
import studio3 from "../../assets/studio3.jpg";
import produktVideo from "../../assets/Produktvideo.mp4"
import studioVideo from "../../assets/Studiovideo_03.mp4"

const produkte1 = [
    {image: testtinte2},
    {image: testtinte1},
    {image: testtinte3},
]

const produkte2 =  [
    {image: halsband2},
    {image: halsband1},
    {image: halsband3},
]

const studio = [
    {image: studio1},
    {image: studio2},
    {image: studio3},
]

export const Produktvideo:React.FC = () => {
    return (
    <div>
        <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <p className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Produktfotos und -videos
                    </p>
                    <p className="text-left mt-6 text-lg leading-8">
                        Unser erfahrenes Team ist mit unterschiedlichen Materialeigenschaften von Produkten vertraut
                        und beherrscht die Techniken, um diese gekonnt in Szene zu setzen und die besten Aufnahmen zu erzielen.
                        <br/>
                        Wir verstehen die Bedeutung von präziser Kontrolle und Inszenierung, besonders wenn es um komplexe
                        Bewegungen oder Effekte geht, um sicherzustellen, dass Dein Produkt optimal präsentiert wird.
                    </p>
                    <div className="mx-auto my-8 max-w-xs sm:mt-20 lg:my-8 sm:max-w-4xl">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm:grid-cols-3 lg:gap-y-16">
                            {produkte1.map((produkt, index) => (
                                <img src={produkt.image} alt={"produkt" + index} className={""}></img>
                            ))}
                        </dl>
                    </div>
                    <video autoPlay muted loop={true} className={"w-full mx-auto"}>
                        <source src={produktVideo} type="video/mp4" />
                    </video>
                    <div className="mx-auto my-8 max-w-xs sm:mt-20 lg:my-8 sm:max-w-4xl">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm:grid-cols-3 lg:gap-y-16">
                            {produkte2.map((produkt, index) => (
                                <img src={produkt.image}  alt={"produkt2" + index} className={""}></img>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                <p className="text-left mt-6 text-3xl font-bold tracking-tight text-gray-900">
                        Sharkz Media Studio
                    </p>
                    <p className="text-left my-6 text-lg leading-8 text-gray-600">
                        Unser neues Studio ist für uns eine Art Werkstatt der Kreativität.  Spezialisierung Maschinenbau.
                        Wir haben uns auch eine stabile Werkbank errichtet, mit der wir unsere eigenen Kameravorrichtungen
                        vor Ort bauen können. Mit unserem Gerüst aus Aluprofilen ist es nicht nur möglich Lampen über der
                        Maschine zu montieren, sondern auch eine Vorrichtung anzubringen, mit der wir Dinge in die Mitte
                        der Kulisse fallen lassen können.

                    </p>
                    <div className="mx-auto max-w-xs sm:max-w-4xl">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm:grid-cols-3 lg:gap-y-16">
                            {studio.map((stu, index) => (
                                <img src={stu.image} alt={"studio" + index} ></img>
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
                        <source src={studioVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </div>
    )
}