import React from 'react'
import business from "../../assets/Business02.jpg"
import produkt from "../../assets/Produkte.jpg"
import hochzeit from "../../assets/Hochzeit01.jpg"
import musikVideo from "../../assets/musicvid.jpg"
import social from "../../assets/Social Media.jpg"
import workshops from "../../assets/Workshop01.jpg"

const callouts = [
    {
        name: 'social Media Content',
        description: 'Social Media Videos und Reels',
        imageSrc: social,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Business',
        description: 'Imagevideos für Unternehmen',
        imageSrc: business,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Produkte',
        description: 'Zeige dein Produkt im besten Licht',
        imageSrc: produkt,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Hochzeit',
        description: 'Hochzeitsvideos',
        imageSrc: hochzeit,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Musikvideo',
        description: '',
        imageSrc: musikVideo,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Workshops',
        description: '',
        imageSrc: workshops,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]
export const Dienstleistungen: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unsere Dienstleistungen</h2>
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="cursor-pointer relative sm:h-96 overflow-hidden rounded-lg bg-white lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-3">
                                    <a href={callout.href} className="text-blue hover:text-primary">
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
    );
};