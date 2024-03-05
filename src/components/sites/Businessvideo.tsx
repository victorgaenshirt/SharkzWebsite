import {BankOutlined, BulbOutlined, CommentOutlined} from "@ant-design/icons";
import React from "react";

export const Businessvideo: React.FC = () => {

    const options = [
        {
            name: 'Tiefere Einblicke in die Prozesse',
            role: 'Videos statt lange Erklärungen',
            imageUrl: "assets/BTS.jpg",
        },
        {
            name: 'Mitarbeiterinterviews',
            role: 'Glückliche Mitarbeiter ziehen weitere Bewerber an',
            imageUrl: "assets/Interview.jpg",
        },
        {
            name: 'Veranstaltung',
            role: 'Zeige deine Firmenveranstaltung / Messeauftritt etc.',
            imageUrl: "assets/Event_02.jpg",
        },
        {
            name: 'Erklärvideos',
            role: 'Erkläre Prozesse oder Produkte genauer',
            imageUrl: "assets/erklaer.jpg",
        },
        {
            name: 'Testimonials',
            role: 'Lass deine Kunden sprechen',
            imageUrl: "assets/typ.jpg",
        },
        {
            name: 'Kampagnenwerbung',
            role: 'Kurze auffällige Werbefilme',
            imageUrl: "assets/Kampagnenwerbung_02.jpg",
        },
    ]

    const benefits = [
        {
            heading: "Alles aus einer Hand",
            text: "Unser besonderer Vorteil liegt darin, dass wir die Produktion von Videos und Fotos nahtlos miteinander verbinden können. Dadurch bieten wir dir eine ganzheitliche Lösung aus einer Hand",
        },
        {
            heading: "Wir kennen deine Bedürfnisse",
            text: "Nachdem wir schon viele Firmen mit profesionellem Videomaterial versorgt haben, wissen wir genau worauf es ankommt.",
        },
        {
            heading: "Innovative Konzepte",
            text: "Wir setzen auf kreative Ansätze, um einzigartige Videos zu gestalten, die sich deutlich von anderen abheben und einen bleibenden Eindruck hinterlassen.",
        },
    ]

    const benefitIcons: { [key: string]: JSX.Element } = {
        "Alles aus einer Hand": <BankOutlined />,
        "Wir kennen deine Bedürfnisse": <CommentOutlined />,
        "Innovative Konzepte": <BulbOutlined />
    };


    const partners = [
        "assets/partner_logos/Nuno.jpg",
        "assets/partner_logos/DDD.jpg",
        "assets/partner_logos/ENBW.jpg",
        "assets/partner_logos/hellbegeistert.jpg",
        "assets/partner_logos/tv-bw.jpg",
        "assets/partner_logos/Brigitte.jpg",
        "assets/partner_logos/HWK.jpg",
        "assets/partner_logos/Schulz.jpg",
        "assets/partner_logos/Ötigheim.jpg",
        "assets/partner_logos/Idendica.jpg",
        "assets/partner_logos/Mashody.jpg",
        "assets/partner_logos/FDL.jpg"
    ]

    return (
        <div>
            <div className="bg-gray-200 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl lg:text-center">
                    <h1 className="text-left text-3xl font-customFont text-gray-900 sm:text-4xl tracking-wide">Businessvideo</h1>
                        <p className="text-left mt-6 text-lg leading-8">
                            Das Imagevideo fungiert als digitale Visitenkarte des Unternehmens. Es präsentiert Produkte und Dienstleistungen,
                            transportiert die Unternehmenswerte und vermittelt einen Eindruck vom Betriebsklima. Dadurch werden Kunden effektiv angesprochen und neue Bewerber angezogen.
                        </p>
                        <video
                        autoPlay muted loop controls={true}
                        className="mt-6 w-full mx-auto">
                        <source src={"assets/Business_03.mp4"}/>
                        </video>
                        <dl className="mt-10 grid grid-cols-1 gap-3 lg:grid-cols-3">
                            {benefits.map((benefit,index) => (
                                <div key={index} className="flex flex-col bg-white px-3 shadow-sm rounded-lg p-3">
                                    <div className={"flex items-center mx-auto mt-3 text-xl font-bold leading-9 tracking-tight text-gray-900"}>
                                        <div className="flex items-center mr-2 text-blue">{benefitIcons[benefit.heading]}</div>
                                        <div>{benefit.heading}</div>
                                    </div>
                                    <dt className="text-base leading-7 m-3 text-gray-600">{benefit.text}</dt>
                                </div>
                            ))}
                        </dl>

                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl lg:text-center">
                        <div className="text-left text-2xl font-bold text-gray-900 sm:text-4xl tracking-wide font-customFont">Wir versorgen dein Unternehmen mit dem passenden Videomaterial</div>
                        <p className="text-left my-6 mb-16 text-lg leading-8">
                            Das sind nur einige unserer Möglichkeiten
                        </p>
                        <ul role="list" className="mt-10 grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3">
                            {options.map((option, index) => (
                                    <div key={index}>
                                        <img className="" src={option.imageUrl} alt="" />
                                        <div className="">
                                            <div className={"text-blue hover:text-primary font-light text-left"}>{option.name}</div>
                                            <div  className="text-xs mb-6 font-semibold text-left">{option.role}</div>
                                        </div>
                                    </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl lg:text-center">
                        <h1 className="text-left text-3xl font-bold text-gray-900 sm:text-4xl tracking-wide font-customFont">Fotos</h1>
                        <p className="text-left my-6 mb-16 text-lg leading-8">
                            Vertrauen auf den ersten Blick: Mit unseren Businessfotos verleihst du deinem Unternehmen
                            Glaubwürdigkeit und Authentizität. Wir erfassen die Atmosphäre Ihrer Geschäftsräume und das
                            Engagement deines Teams, um ein Bild zu schaffen, das Vertrauen und Sympathie weckt.
                        </p>
                        <div role="list" className="flex gap-3 justify-center flex-col sm:flex-row">
                            <img className="flex max-h-96 mx-auto" src={"assets/Businessfoto_02-hoch.jpg"} alt="" />
                            <img className="flex max-h-96 mx-auto" src={"assets/Businessfoto_01.jpg"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto  lg:text-center">
                        <h2 className="text-center text-xl font-semibold leading-8 text-gray-900">
                            Mit diesen Kunden haben wir bereits zusammengearbeitet
                        </h2>
                        <div className="mx-auto mt-10 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-2 place-items-center">
                            {partners.map((partner, index) => (
                                <img
                                    key={index}
                                    className="mx-1 w-full"
                                    src={partner}
                                    alt="Tuple"
                                    width={158}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
