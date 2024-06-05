import React from "react";

const produkte1 = [
    {image: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/testtinte2.jpg?alt=media&token=4def6a9f-c86d-4308-8438-43618095ba2f"},
    {image: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/testtinte1.jpg?alt=media&token=f789d2d8-1565-438f-8425-b367c544930e"},
    {image: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/testtinte3.jpg?alt=media&token=bdc5459c-713a-492c-8c34-a48dd8802652"},
]

const produkte2 =  [
    {image: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/halsband3.jpg?alt=media&token=4b691f67-1093-4792-96d3-ac48cbcbbb38"},
    {image: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/schuessel.jpg?alt=media&token=85aadf71-e512-43a3-85a4-0be2ab7a9bf6"},
    {image: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/halsband2.jpg?alt=media&token=04e029ea-5247-40a8-8117-610fa300a591"}
]

const studio = [
    {image: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/studio1.jpg?alt=media&token=1c1f0057-4698-4152-8561-342a1af965ca"},
    {image: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/studio2.jpg?alt=media&token=5f372d4a-c53e-43dc-b3c5-50da6caaa651"},
    {image: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/studio3.jpg?alt=media&token=9f1c7c2b-123b-4aae-a5e6-8734aef17820"},
]

export const Produktvideo:React.FC = () => {
    return (
    <div>
        <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <p className="text-left text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">
                        Produktvideo und -fotos
                    </p>
                    <p className="text-left mt-6 text-lg text-gray-600 leading-relaxed">
                        Unser erfahrenes Team beherrscht die Techniken, um Produkte optimal zu präsentieren.
                        <br/>
                        Wir verstehen die Bedeutung von präziser Kontrolle und Inszenierung, besonders bei komplexen
                        Bewegungen oder Effekten, um sicherzustellen, dass dein Produkt optimal präsentiert wird.
                    </p>
                </div>
                <div className="mx-auto max-w-3xl lg:text-center sm:block hidden">
                    <div className="mx-auto my-3 max-w-xs sm:my-6 lg:my-8 sm:max-w-4xl ">
                            <dl className="grid grid-cols-1 lg:max-w-none sm:grid-cols-3 gap-3">
                                {produkte1.map((produkt, index) => (
                                    <img key={index} src={produkt.image} alt={"produkt" + index} className={""}></img>
                                ))}
                            </dl>
                        </div>
                        <video
                            autoPlay
                            muted
                            loop={true}
                            className={"w-full mx-auto"}
                            preload="auto"
                        >
                            <source src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Produktvideo.mp4?alt=media&token=12a9ae66-bcaa-48ac-8bad-c5fdc32ae37e" type="video/mp4" />
                        </video>
                        <div className="mx-auto my-3 max-w-xs sm:my-6 sm:max-w-4xl">
                            <dl className="grid grid-cols-1 lg:max-w-none sm:grid-cols-3 gap-3 sm:gap-6">
                                {produkte2.map((produkt, index) => (
                                    <img key={index} src={produkt.image}  alt={"produkt2" + index} className={""}></img>
                                ))}
                            </dl>
                    </div>
                </div>
                <div className="mx-auto max-w-3xl lg:text-center sm:hidden">

                    <video
                        autoPlay
                        muted
                        loop={true}
                        className={"w-full mx-auto my-3"}
                        preload="auto"
                    >
                        <source src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Produktvideo.mp4?alt=media&token=12a9ae66-bcaa-48ac-8bad-c5fdc32ae37e" type="video/mp4" />
                    </video>
                    <div className="mx-auto my-3  max-w-4xl">
                        <dl className="grid grid-cols-2 grid-rows-3 lg:max-w-none sm:grid-cols-3 gap-3 sm:gap-6">
                            {produkte2.map((produkt, index) => (
                                <img key={index} src={produkt.image} alt={"produkt2" + index} className={""}></img>
                            ))}
                            {produkte1.map((produkt, index) => (
                                <img key={index} src={produkt.image} alt={"produkt" + index} className={""}></img>
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
                    <video
                        autoPlay
                        muted
                        controls={true}
                        className={"w-full mx-auto"}
                        preload="auto"
                    >
                        <source src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Studiovideo_03.mp4?alt=media&token=4ccad625-9945-41c3-9160-a5e513c78657" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </div>
    )
}