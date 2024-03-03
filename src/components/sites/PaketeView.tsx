import {CheckOutlined} from "@ant-design/icons";

const Pakete = [
    {name: "Socialmedia Story",
        beschreibung: "Ein maßgeschneiderter Kurzfilm für deinen Social-Media-Auftritt.",
        preis: "500",
            features: ["3h Kameramann",
                        "5h Nachbearbeitung",
                        "Kameraequipment",
                        "Länge: bis zu 15 sec."]},
    {name: "Starterpaket / Reel",
        beschreibung: "",
        preis: "1000",
        features: ["5h Kameramann",
            "10h Nachbearbeitung",
            "Kameraequipment",
            "Länge bis zu 1 min."]},
    {name: "Standardpaket",
        beschreibung: "",
        preis: "4500",
        features: ["2 x 8h Kameramann",
            "40h Nachbearbeitung",
            "Kameraequipment & Lichtequipment",
            "Länge: 1-2 min.",
            "Socialmedia Anpassung & Trailer"]},
    {name: "Profipaket",
        beschreibung: "",
        preis: "8000",
        features: ["2 x 10h Kameramann",
            "10h Tontechniker",
            "60h Nachbearbeitung",
            "Kameraequipment & Lichtequipment",
            "Länge: bis zu 4min.",
            "Socialmedia Anpassung & Trailer",
            "4h Drohnenaufnahmen",
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
                        Alle Pakete beinhalten die Beratung & Planung sowie Lizenzfreie Musik.
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
                                        <li key={index} className="flex gap-x-3">
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
                                        <p className="text-xs font-semibold text-gray-600">zzgl. 19% MwSt. <br/> und Anfahrtskosten 75 ct/km</p>
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