import {BankOutlined, BulbOutlined, CommentOutlined} from "@ant-design/icons";
import bts from "../../assets/BTS.jpg";
import interview from "../../assets/Interview.jpg"
import erklaer from "../../assets/erklaer.jpg"
import veranstaltung from "../../assets/Event_02.jpg"
import tester from "../../assets/typ.jpg"
import converse from "../../assets/Kampagnenwerbung_02.jpg"
import ddd from "../../assets/DDD.jpg"
import enbw from "../../assets/ENBW.jpg"
import mashody from "../../assets/mashody.jpg"
import hb from "../../assets/hellbegeistert.jpg"
import tvbw from "../../assets/tv-bw.jpg"

export const Businessvideo = () => {

    const options = [
        {
            name: 'Tiefere Einblicke in die Prozesse',
            role: 'Videos statt lange Erklärungen',
            imageUrl:
                bts,
        },
        {
            name: 'Mitarbeiterinterviews',
            role: 'Glückliche Mitarbeiter ziehen weitere Bewerber an',
            imageUrl:
                interview,
        },
        {
            name: 'Veranstaltung',
            role: 'Zeige deine Firmenveranstaltung / Messeauftritt etc.',
            imageUrl:
            veranstaltung,
        },
        {
            name: 'Erklärvideos',
            role: 'Erkläre Prozesse oder Produkte genauer',
            imageUrl:
                erklaer,
        },
        {
            name: 'Testimonials',
            role: 'Lass deine Kunden sprechen',
            imageUrl:
                tester,
        },
        {
            name: 'Kampagnenwerbung',
            role: 'Kurze auffällige Werbefilme',
            imageUrl:
            converse,
        },
    ]

    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            {/*<p className="text-base font-semibold leading-7 text-indigo-600">Präsentieren sie sich im besten Licht</p>*/}
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Businessvideo</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Wir versorgen dein Unternehmen mit dem passenden Videomaterial.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                Das Imagevideo fungiert als digitale Visitenkarte des Unternehmens. Es präsentiert Produkte und Dienstleistungen,
                                transportiert die Unternehmenswerte und vermittelt einen Eindruck vom Betriebsklima. Dadurch werden Kunden effektiv angesprochen und neue Bewerber angezogen.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <BankOutlined className="mt-1 h-5 w-5 flex-none text-blue" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Alles aus einer Hand</strong> dass wir ähm dass der vorteil oah des müsst ich nommal schön formuliert bekomme dass der vorteil darin besteht dasss wir halt videos und fotos gleichzeitig für die produziern
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CommentOutlined className="mt-1 h-5 w-5 flex-none text-blue" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Wir kennen deine Bedürfnisse</strong> Nachdem wir schon viele Firmen mit profesionellem Videomaterial versorgt haben, wissen wir genau worauf es ankommt.
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <BulbOutlined className="mt-1 h-5 w-5 flex-none text-blue" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Innovative Konzepte</strong> Wir unterstützen dich mit unserer Kreativität, um für sie
                                        ein Video zu kreieren, dass sich von der Masse abhebt.
                  </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 py-10 px-6 lg:px-32 bg-gray-100">
                <div className="lg:max-w-7xl">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Du hast schon ein aktuelles Imagevideo ?</h1>
                    <p className="my-6 text-xl leading-8 text-gray-700">
                        Lass dich von unseren weiteren Optionen überzeugen
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {options.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-20 w-20 sm:h-32 sm:w-32 rounded-lg" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-blue">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white pt-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                       Mit diesen Unternehmen durften wir bereits zusammenarbeiten
                    </h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            className="col-span-2 w-full object-contain lg:col-span-1"
                            src={ddd}
                            alt="Transistor"
                            width={158}
                        />
                        <img
                            className="col-span-2 w-full object-contain lg:col-span-1"
                            src={mashody}
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 w-full object-contain lg:col-span-1"
                            src={enbw}
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src={tvbw}
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 col-start-2 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src={hb}
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
