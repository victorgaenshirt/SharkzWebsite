import React from 'react'
import business from "../../assets/Businessfoto_02.jpg"
import produkt from "../../assets/Produkt_19.jpg"
import hochzeit from "../../assets/Hochzeit_07.jpg"
import musikVideo from "../../assets/musicvid.jpg"
import social from "../../assets/Social Media.jpg"
import workshops from "../../assets/Workshop01.jpg"
import {Link} from "react-router-dom";
import startseiteReel from "../../assets/Startseite-Reel_08.mp4";

const callouts = [
    {
        name: 'Social Media Content',
        description: 'Social Media Videos und Reels',
        imageSrc: social,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
        id: "/social",
    },
    {
        name: 'Business',
        description: 'Imagevideos für Unternehmen',
        imageSrc: business,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        id: "/business",
    },
    {
        name: 'Produkte',
        description: 'Zeige dein Produkt im besten Licht',
        imageSrc: produkt,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        id: "/produkte",
    },
    {
        name: 'Hochzeit',
        description: 'Hochzeitsvideos',
        imageSrc: hochzeit,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        id: "/hochzeit",
    },
    {
        name: 'Musikvideo',
        description: '',
        imageSrc: musikVideo,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '',
        id: "",
    },
    {
        name: 'Workshops',
        description: '',
        imageSrc: workshops,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        id: "/workshop",
    },
]
export const Dienstleistungen: React.FC = () => {
    return (
        <div className="bg-white py-10 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <video autoPlay muted controls={true} className={"max-w-7xl mt-6 w-full mx-auto"}>
                        <source src={startseiteReel} type="video/mp4" />
                    </video>
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unsere Dienstleistungen</h2>
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                            {callouts.map((callout) => (
                                <div>
                                        <Link to={callout.id}>
                                            <img
                                                src={callout.imageSrc}
                                                alt={callout.imageAlt}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </Link>
                                        <div>
                                            <div className="flex items-center mx-auto mt-3 text-xl font-bold leading-9 tracking-tight text-gray-900">
                                                {callout.name}
                                            </div>
                                            <div className="flex text-left items-center mx-auto leading-7 text-lg text-blue">{callout.description}</div>
                                        </div>
                                </div>
                            ))}
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
};