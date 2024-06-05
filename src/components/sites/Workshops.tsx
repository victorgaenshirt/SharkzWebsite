import React from "react";

const links = [
    { name: 'Für Einzelpersonen oder Gruppen', href: '#', info: "bis zu 10 Teilnehmer" },
    { name: '20 Stunden', href: '#', info:"pro Thema 2 Stunden" },
    { name: 'Flexibler Zeitraum', href: '#', info:"von 3 bis 10 Tagen" },
    { name: '75 € / Stunde ', href: '#', info: "zzgl. 19% MwSt. und Anfahrtskosten 45 ct/km" },
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
        <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-left text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Der Sharkz Media Workshop</h2>
                    <p className="text-left my-3 text-lg text-gray-600 leading-relaxed sm:my-6">
                        Buche unseren Workshop, um professionelles Wissen zur Videoproduktion<br/> aus erster Hand zu erhalten und sofort praktische Erfahrungen zu sammeln.
                    </p>
                    <img className={"my-10"} src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Workshop_13.jpg?alt=media&token=b967e00b-b307-4fd0-8a9a-83b7a8f894bc"></img>
                        <div className="grid grid-cols-1 gap-8 text-base sm:grid-cols-2">
                            {links.map((link, index) => (
                                <div key={index}>
                                    <div className={"text-center sm:text-lg text-blue text-sm"}>
                                        {link.name}
                                    </div>
                                    <div className={"text-center sm:text-sm text-blue text-xs"}>
                                        {link.info}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-left mt-16 text-2xl tracking-wide text-gray-900 sm:text-3xl font-customFont">Unsere Themen</h2>
                        <dl className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col bg-white shadow-xl border-gray-700 rounded-lg p-3">
                                    <dd className="text-left sm:text-xl text-lg font-bold leading-relaxed tracking-tight text-gray-900">{stat.value}</dd>
                                    <dt className="text-left my-1 text-gray-600 text-sm sm:text-lg leading-relaxed">{stat.name}</dt>
                                </div>
                            ))}
                        </dl>
                </div>
            </div>
        </div>
    )
}