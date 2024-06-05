import {BankOutlined, BulbOutlined, CommentOutlined} from "@ant-design/icons";
import React from "react";

export const Businessvideo: React.FC = () => {

    const options = [
        {
            name: 'Einblicke in Prozesse',
            role: 'Videos statt lange Erklärungen',
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/BTS.jpg?alt=media&token=6dd6b34b-df79-4ca0-8e72-5ff50c67948c",
        },
        {
            name: 'Mitarbeiterinterviews',
            role: 'Glückliche Mitarbeiter ziehen weitere Bewerber an',
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Interview.jpg?alt=media&token=04f37e0f-dbf8-4347-9b6b-b75f0ffe7429",
        },
        {
            name: 'Veranstaltung',
            role: 'Zeige deine Firmenveranstaltung / Messeauftritt etc.',
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Event_02.jpg?alt=media&token=097b4a9e-7fd5-4f4a-a6e9-c46f5d297e2e",
        },
        {
            name: 'Erklärvideos',
            role: 'Erkläre Prozesse oder Produkte genauer',
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/erklaer.jpg?alt=media&token=d8c7bb8a-ae23-4edc-aa72-75727a2e4829",
        },
        {
            name: 'Testimonials',
            role: 'Lass deine Kunden sprechen',
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/typ.jpg?alt=media&token=dd82c6d0-27c7-4ea8-a744-6f51a9c937c9",
        },
        {
            name: 'Kampagnenwerbung',
            role: 'Kurze auffällige Werbefilme',
            imageUrl: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Kampagnenwerbung_02.jpg?alt=media&token=2068cccb-a887-48ca-915f-a76e17530343",
        },
    ]

    const benefits = [
        {
            heading: "Alles aus einer Hand",
            text: "Unser besonderer Vorteil liegt darin, dass wir die Produktion von Videos und Fotos nahtlos miteinander verbinden können. Dadurch bieten wir dir eine ganzheitliche Lösung aus einer Hand.",
        },
        {
            heading: "Wir kennen deine Bedürfnisse",
            text: "Nachdem wir schon viele Firmen mit professionellem Videomaterial versorgt haben, wissen wir genau worauf es ankommt.",
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
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2FNuno.jpg?alt=media&token=c48c38d8-af75-4892-8a2f-7d4c5e0f3455",
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2FDDD.jpg?alt=media&token=24c78b82-d13e-42ae-83a7-0edddde1dc61",
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2FENBW.jpg?alt=media&token=682cb0d4-349c-45cc-9080-489b9df6bd2f",
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2Fhellbegeistert.jpg?alt=media&token=4b3afa09-cb66-431b-8f0d-60a2759a50f3",
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2Ftv-bw.jpg?alt=media&token=a04ed441-d791-4355-8fcb-b0a8e3de3528",
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2FBrigitte.jpg?alt=media&token=37106956-a5c9-4ec7-bfd1-7e581ebc1bcc",
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2FHWK.jpg?alt=media&token=501290e8-b6d1-41ce-b6dc-f64555665c65",
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2FSchulz.jpg?alt=media&token=0d78c73a-9ff3-43d3-afa1-b87d587e3109",
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2FO%CC%88tigheim.jpg?alt=media&token=4dd53842-f44e-4d89-ab71-ab5794350348",
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2FIdendica.jpg?alt=media&token=3bbcae06-9da5-42f9-a3c2-c7fab4035823",
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2FMashody.jpg?alt=media&token=85c493ab-e7e9-4027-a370-a370f04c9f6e",
        "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/logos%2FFDL.jpg?alt=media&token=1d03b348-1292-4865-9fd8-b21211c313a2"
    ]

    return (
        <div>
            <div className="bg-gray-200 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl lg:text-center">
                    <h1 className="text-left text-3xl font-customFont text-gray-900 sm:text-4xl tracking-wide">Businessvideo</h1>
                        <p className="text-left mt-6 text-lg text-gray-600 leading-8">
                            Das Imagevideo fungiert als digitale Visitenkarte des Unternehmens. Es präsentiert Produkte und Dienstleistungen,
                            transportiert die Unternehmenswerte und vermittelt einen Eindruck vom Betriebsklima. Dadurch werden Kunden effektiv angesprochen und neue Bewerber angezogen.
                        </p>
                        <video
                            autoPlay
                            muted
                            loop
                            controls={false}
                            preload="auto"
                            className="mt-6 w-full mx-auto"
                        >
                        <source src={"https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Business_03.mp4?alt=media&token=7bcdc45f-bc36-4ca6-825f-7751f861864e"}/>
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
                                            <div className={"text-blue font-light text-left"}>{option.name}</div>
                                            <div  className="text-xs font-semibold text-gray-600 text-left">{option.role}</div>
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
                            Glaubwürdigkeit und Authentizität. Wir erfassen die Atmosphäre deiner Geschäftsräume und das
                            Engagement deines Teams, um ein Bild zu schaffen, das Vertrauen und Sympathie weckt.
                        </p>
                        <div role="list" className="flex gap-3 justify-center flex-col sm:flex-row">
                            <img className="flex max-h-96 mx-auto" src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Businessfoto_02-hoch.jpg?alt=media&token=e7de56d1-0337-407e-82ba-53c3a23cd37c" alt="" />
                            <img className="flex max-h-96 mx-auto" src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Businessfoto_01.jpg?alt=media&token=fafad156-57d2-40bd-8e17-5c6bfbfb6ef5" alt="" />
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
