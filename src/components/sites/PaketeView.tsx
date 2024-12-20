import {CheckOutlined} from "@ant-design/icons";

const Pakete = [
    {name: "Starterpaket / Reel",
        beschreibung: "Bleibe im Trend des schnellen Swipens mit 1-minütigen Reels bietest du deiner Zielgruppe zum " +
            "Beispiel einen Mehrwert durch dein Fachwissen.\n",
        preis: "1299",
        features: ["5h Kameramann",
            "10h Nachbearbeitung",
            "Kameraequipment",
            "Länge bis zu 1 min."]},
    {name: "Komplettpaket",
        beschreibung: "Präsentiere dich professionell mit unserem Komplettpaket für Imagevideos und beeindrucke deine Zielgruppe nachhaltig.\n",
        preis: "4999",
        features: ["16h Kameramann",
            "40h Nachbearbeitung",
            "Kameraequipment & Lichtequipment",
            "Länge: 1-2 min.",
            "Socialmedia Anpassung & Trailer"]},
    {name: "Premiumpaket",
        beschreibung: "Erreichen Sie mit unserem Premiumpaket ein neues Level und schöpfen Sie das volle Potenzial einer Produktion aus, um Ihre Marke optimal zu präsentieren und Ihre Zielgruppe zu begeistern.",
        preis: "7999",
        features: ["20h Kameramann und Kameraassistent",
            "60h Nachbearbeitung",
            "Kameraequipment & Lichtequipment",
            "Länge: bis zu 4min.",
            "Socialmedia Anpassung & Trailer",
            "10h Tontechniker",
            "Behind the scences Fotos",
        ]},
]

export const PaketeView = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-left text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Pakete</h2>
                    <p className="text-left mt-6 text-lg leading-8 text-gray-600">
                        Mit unseren festen Preispaketen behalten Sie den klaren Überblick über die Kosten.
                    </p>
                    <p className="text-left mt-6 text-xl leading-8 text-blue">
                        Alle Pakete beinhalten die Beratung & Planung sowie lizenzfreie Musik.
                    </p>
                {Pakete.map((paket, index) =>
                    <div key={index}>
                        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">{paket.name}</h3>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    {paket.beschreibung}
                                </p>
                                <div className="mt-10 flex items-center gap-x-4">
                                    <h4 className="flex-none text-sm font-semibold leading-6 text-blue">beinhaltet</h4>
                                    <div className="h-px flex-auto bg-gray-100" />
                                </div>
                                <ul
                                    role="list"
                                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                                >
                                    {paket.features.map((feature, index) => (
                                        <li key={index} className="flex gap-x-3 text-left">
                                            <CheckOutlined className="h-6 w-5 flex-none text-blue" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="m-1 p-1 lg:flex-shrink-0">
                                <div className=" h-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                    <div className="mx-auto max-w-xs px-8">
                                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                            <span className="text-5xl font-bold tracking-tight text-gray-900">{paket.preis}</span>
                                            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">EUR</span>
                                        </p>
                                        <p className="text-xs font-semibold text-gray-600">zzgl. 19% MwSt. <br/> und Anfahrtskosten 45 ct/km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    )}
                </div>
            </div>
        </div>
    )
}