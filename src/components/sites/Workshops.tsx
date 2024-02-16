import React from "react";
import workshop from "../../assets/Workshop_13.jpg";

const links = [
    { name: 'Für Einzelpersonen oder Gruppen von bis zu 10 Teilnehmern', href: '#' },
    { name: '10 x 2 Stunden', href: '#' },
    { name: 'Zeitraum von 3 - 10 Tagen', href: '#' },
    { name: 'Kosten: 75EUR / Stunde', href: '#' },
]
const stats = [
    { name: 'Erfahre, warum Videomarketing so wichtig ist, welche Ziele damit erreicht werden können und erhalte anhand von Beispielen einen Einblick in erfolgreiche Videomarketingstrategien.', value: 'Einführung in Videomarketing' },
    { name: 'Lerne, wie du eine effektive Videomarketingstrategie entwickelst, die deine Ziele unterstützt und deine Zielgruppe anspricht.', value: 'Strategie' },
    { name: 'Entdecke kreative Ideen für Werbefilme, die deine Produkte oder Dienstleistungen effektiv präsentieren und dein Publikum ansprechen.', value: 'Werbefilmideen' },
    { name: 'Erfahre, wie du deine Videoprojekte effizient planst, um Zeit und Ressourcen optimal zu nutzen.', value: 'Planung' },
    { name: 'Erhalte Einblicke in die benötigte Ausrüstung für professionelle Videoaufnahmen und wie du diese am besten einsetzen kannst.', value: 'Ausstattung' },
    { name: 'Lerne, wie du mit deinem Smartphone hochwertige Videos aufnimmst und bearbeitest, ohne teure Ausrüstung verwenden zu müssen.', value: 'Mit dem Handy professionell filmen' },
    { name: 'Lerne die Grundlagen erfolgreicher Dreharbeiten kennen, von der Bildkomposition bis zur Beleuchtung.', value: 'Dreharbeiten' },
    { name: 'Entdecke Tools und Techniken zur Bearbeitung und Verbesserung deiner Videomaterialien für ein professionelles Endergebnis.', value: 'Nachbearbeitung' },
    { name: 'Erfahre, wie Künstliche Intelligenz deine Videoproduktion unterstützen kann und welche Tools dir dabei helfen, deine Videos zu optimieren.', value: 'KI-Tools' },
    { name: 'Entdecke, welche Social-Media-Plattformen am besten zu deiner Videomarketingstrategie passen und wie du sie optimal nutzen kannst.', value: 'Welche Social-Media-Plattform' },
]

export const Workshops:React.FC = () => {
    return (
        <div className="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32">


            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Der Sharkz Media Workshop</h2>
                    <p className="mt-6 text-2xl leading-8 text-gray-800">
                        Buche unseren Workshop, um professionelles Wissen zur Videoproduktion<br/> aus erster Hand zu erhalten und sofort praktische Erfahrungen zu sammeln.
                    </p>
                </div>
                <img className={"mt-10"} src={workshop}></img>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <div className={"text-gray-600 text-lg"}>
                                {link.name}
                            </div>
                        ))}
                    </div>
                    <h2 className="mt-32 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Unsere Themen</h2>
                    <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col bg-white shadow-xl border-gray-700 rounded-lg p-3">
                                <dd className="text-xl font-bold leading-9 tracking-tight text-gray-900">{stat.value}</dd>
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}