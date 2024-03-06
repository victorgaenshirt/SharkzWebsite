import React from 'react'
import {Link} from "react-router-dom";

const callouts = [
    {
        name: 'Social Media Content',
        description: 'Angepasste Inhalte für Storys, Reels oder Posts',
        imageSrc: "assets/Social Media.jpg",
        imageAlt: '',
        href: '#',
        id: "/social",
    },
    {
        name: 'Business',
        description: 'Imagevideos für Unternehmen',
        imageSrc: "assets/Businessfoto_01.jpg",
        imageAlt: '',
        href: '#',
        id: "/business",
    },
    {
        name: 'Produkte',
        description: 'Zeige dein Produkt im besten Licht',
        imageSrc: "assets/Produkt_19.jpg",
        imageAlt: '',
        href: '#',
        id: "/produkte",
    },
    {
        name: 'Hochzeit',
        description: 'Hochzeitsvideos',
        imageSrc: "assets/Hochzeit_22.jpg",
        imageAlt: '',
        href: '#',
        id: "/hochzeit",
    },
    {
        name: 'Musikvideo',
        description: '',
        imageSrc: "assets/musicvid.jpg",
        imageAlt: '',
        href: '#',
        id: "/musikvideo",
    },
    {
        name: 'Workshops',
        description: 'Praxisnahes Wissen für dein Videomarketing',
        imageSrc: "assets/Workshop01.jpg",
        imageAlt: '',
        href: '#',
        id: "/workshop",
    },
]
export const Dienstleistungen: React.FC = () => {
    return (
        <div className="bg-white">
            <div className=" max-w-4xl text-center mx-auto py-10 sm:py-16">
                <video autoPlay muted controls={true} className={"w-full text-center mx-auto"}>
                    <source src={"../../assets/Startseite-Reel_08.mp4"} type="video/mp4" />
                </video>
            </div>
            <div className={"bg-gray-100 py-10 sm:py-16"}>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 ">
                <div className="mx-auto lg:max-w-none">
                    <h2 className="text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Unsere Dienstleistungen</h2>
                    <div className="mt-6 grid sm:grid-cols-3 grid-cols-2 gap-6">
                        {callouts.map((callout,index) => (
                            <div key={index} className="group relative">
                                <div className="cursor-pointer relative overflow-hidden bg-white sm:aspect-h-1 sm:aspect-w-1 group-hover:opacity-75">
                                    <Link to={callout.id}>
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                    </Link>
                                </div>
                                <h3 className="mt-3">
                                    <a href={callout.href} className="text-blue hover:text-primary font-light">
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-xs mb-6 font-semibold">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};