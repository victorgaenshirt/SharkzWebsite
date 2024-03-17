import React from "react";
import content from "../../content.json";
import {Disclosure} from "@headlessui/react";
import {
    ArrowRightOutlined,
    CheckSquareOutlined, CloudUploadOutlined, CommentOutlined, EuroOutlined, FileDoneOutlined,
    FileProtectOutlined,
    ScheduleOutlined, SignatureOutlined, SmileOutlined,
    UploadOutlined,
    UpOutlined, VideoCameraOutlined
} from "@ant-design/icons";

export const Workflow: React.FC = () => {

 const Ablauf= [{icon: <CheckSquareOutlined />, name: "1. Checkliste "},
     {icon: <CommentOutlined />, name: "2. Erstgespräch mit Bedarfsanalyse und Beratung"},
     {icon: <FileProtectOutlined />, name: "3. Kostenvoranschlag / Angebot ggfs. Änderungen"},
     {icon: <SignatureOutlined />, name: "4. Werkvertrag unterzeichnen"},
     {icon: <EuroOutlined />, name: "5. Anzahlung"},
     {icon: <FileDoneOutlined />, name: "6. Bestätigung des Konzepts und der Shot-Liste"},
     {icon: <ScheduleOutlined />, name: "7. Organisation (Termine, Location, etc.)"},
     {icon: <VideoCameraOutlined />, name: "8. Beginn der Produktion"},
     {icon: <CloudUploadOutlined />, name: "9. Revision & Abnahme des Werkes"},
     {icon: <FileDoneOutlined />, name: "10. Rechnung"},
     {icon: <UploadOutlined />, name: "11. Übergabe des Werkes"},
     {icon: <SmileOutlined />, name: "12. Rezension"}]
    return (
        <>
        <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Ablauf</h2>
                    <p className="text-center my-3 sm:my-6 text-lg sm:text-xl leading-8 text-gray-600 font-semibold">
                        Unser Kundenprozess bietet dir eine strukturierte Vorstellung davon, wie wir Schritt für Schritt auf ein erfolgreiches Endergebnis hinarbeiten, um deine Zufriedenheit zu gewährleisten.
                    </p>
                    <div className="grid sm:grid-cols-2 grid-cols-1">
                    {Ablauf.map((punkt, index) =>
                        <div className="flex">
                            <div  className="bg-white shadow-sm w-full p-2 m-1 sm:p-3 sm:m-3 rounded-lg flex flex-row justify-evenly">
                                    <div className={"w-1/5 my-auto text-2xl sm:text-4xl flex"}>{punkt.icon}</div>
                                    <div className={"w-3/5 flex my-auto text-sm sm:text-lg text-left flex-1"}>{punkt.name}</div>
                            </div>
                            <div className={"my-auto text-sm sm:text-2xl flex"}>
                                {index != Ablauf.length-1 ? <ArrowRightOutlined/> : null}
                            </div>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Produktionsprozesse</h2>
                    <p className="text-center my-3 sm:my-6 text-lg sm:text-xl leading-8 text-gray-600 font-semibold">
                        Das erwartet dich wenn du unsere Dienstleistungen in Anspruch nimmst.
                    </p>
                    <div className={"grid grid-cols-1 sm:grid-flow-row gap-1 sm:gap-6 sm:grid-cols-3 my-6"}>
                        <img className="sm:col-span-1" src={"assets/Vorproduktion_01.jpg"} alt="" />
                        <div className="sm:col-span-2 my-auto">
                            <h2 className=" text-center sm:text-left text-lg sm:text-xl tracking-wide text-blue font-light">Vorproduktion</h2>
                            <p className="sm:text-left text-center ">
                                Bei Sharkz Media sind wir von Anfang an an deiner Seite. Wir entwerfen ein maßgeschneidertes Konzept, das durch ein Storyboard, eine detaillierte Shotliste und andere visuelle Hilfsmittel genau auf deine Vorstellungen zugeschnitten ist. Unsere gründliche Planung garantiert nicht nur wirtschaftliche Effizienz, sondern auch die Schaffung visuell beeindruckender Konzepte, die deine Botschaft gezielt an deine Zielgruppe vermitteln.
                            </p>
                        </div>
                    </div>
                    <div className={"grid grid-cols-1 sm:grid-flow-row gap-1 sm:gap-6 sm:grid-cols-3 my-6"}>
                        <img className="sm:col-span-1" src={"assets/Dreharbeiten_01.jpg"} alt="" />
                        <div className="sm:col-span-2 my-auto">
                            <h2 className=" text-center sm:text-left text-lg sm:text-xl tracking-wide text-blue font-light ">Dreharbeiten</h2>
                            <p className="sm:text-left text-center">
                                Unser eingespieltes Team aus Fachleuten gewährleistet reibungslose Abläufe und die
                                präzise Umsetzung deiner Vision. Von dem Aufbau bis hin zu Regieanweisungen,
                                Lichtsetzung, Kameraeinstellungen, -Bewegungen, Tonaufnahmen, Fokus, Spezialeffekten,
                                Make-up, Motivgestaltung und dem Abbau - wir kümmern uns um jedes Detail, damit dein
                                Projekt ein voller Erfolg wird.
                            </p>
                        </div>
                    </div>
                    <div className={"grid grid-cols-1 sm:grid-flow-row gap-1 sm:gap-6 sm:grid-cols-3 my-6"}>
                        <img className="sm:col-span-1" src={"assets/Nachbearbeitung.jpg"} alt="" />
                        <div className="sm:col-span-2 my-auto">
                            <h2 className=" text-center sm:text-left text-lg sm:text-xl tracking-wide text-blue font-light">Nachbearbeitung</h2>
                            <p className="sm:text-left text-center ">
                                Nach Abschluss der Dreharbeiten nehmen wir uns das Rohmaterial vor und veredeln es gemäß deinen Vorstellungen. Unsere professionellen Dienstleistungen decken sämtliche Bereiche ab, darunter Schnitt, visuelle Effekte, Farbkorrektur, Grafikdesign, Sounddesign und Audioproduktion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Checkliste</h2>
                    <p className="mx-auto text-center my-3 sm:my-6 text-lg font-light sm:text-2xl leading-8 text-blue">
                        Mit dieser umfassenden Projektüberlegung kannst du sicherstellen, dass dein Filmprojekt optimal vorbereitet ist und einen reibungslosen Start sowie eine erfolgreiche Umsetzung ermöglicht.
                    </p>
                    <div className="text-center max-w-2xl mx-auto">
                        {content.Checkliste.map((item, index) => (
                            <Disclosure key={index} as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm sm:text-lg font-medium text-blue hover:bg-lightBlue focus:outline-none focus-visible:ring focus-visible:ring-primary">
                                            <span>{item.Titel}</span>
                                            <UpOutlined
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-blue`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-left px-4 pb-2 pt-4 text-sm sm:text-lg text-gray-800">
                                            {item.Text}
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                        <p className="text-center my-3 sm:my-6 text-lg sm:text-xl leading-8 text-gray-600 font-semibold">
                            Dies sind wichtige Fragen die du als Kunde vor der Produktion beantworten solltest. Im nächsten Schritt werden wir deine Antworten einmal gemeinsam besprechen,
                            das hilft uns dabei, für dich die optimale Lösung zu finden.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
