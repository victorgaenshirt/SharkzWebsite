import React, {useState} from 'react'
import {Link} from "react-router-dom";

const callouts = [
    {
        name: 'Business',
        description: 'Präsentiere dein Unternehmen professionell und zeitgemäß',
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Businessfoto_01.jpg?alt=media&token=fafad156-57d2-40bd-8e17-5c6bfbfb6ef5",
        imageAlt: '',
        href: '#',
        id: "/business",
    },
    {
        name: 'Social Media Content',
        description: 'Angepasste Inhalte für Storys, Reels oder Posts',
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Social%20Media_02.jpg?alt=media&token=0b1d99a1-34bc-4331-9074-d196bc166c78",
        imageAlt: '',
        href: '#',
        id: "/socialmedia",
    },
    {
        name: 'Produkte',
        description: 'Zeige dein Produkt im besten Licht',
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Produkt_19.jpg?alt=media&token=48058f76-1716-4f12-89a9-9a7151c29a4b",
        imageAlt: '',
        href: '#',
        id: "/produkte",
    },
    {
        name: 'Musikvideo',
        description: 'Kreative Konzepte gemeinsam umsetzen',
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/musicvid.jpg?alt=media&token=992f3c04-2f50-417a-b309-e4d4e79deb8d",
        imageAlt: '',
        href: '#',
        id: "/musikvideo",
    },
    {
        name: 'Hochzeit',
        description: 'Emotionale Momente perfekt eingefangen',
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Hochzeit_22.jpg?alt=media&token=9d695c37-a764-4daa-add0-5495f989408f",
        imageAlt: '',
        href: '#',
        id: "/hochzeiten",
    },
    {
        name: 'Workshops',
        description: 'Praxisnahes Wissen für dein Videomarketing',
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/Workshop01.jpg?alt=media&token=cd122df4-9b61-475a-8764-46e4d5365296",
        imageAlt: '',
        href: '#',
        id: "/workshop",
    },
]


export const Dienstleistungen: React.FC = () => {
    const [videoEnded, setVideoEnded] = useState(false);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    const handleVideoPlay = () => {
        setVideoEnded(false); // Reset the video ended flag when video starts playing again
    };

    return (
        <div className="bg-white">
            <div className={"bg-gray-100"}>
            {!videoEnded ? <div className="max-w-4xl text-center mx-auto py-10 sm:py-16">
                <div className="text-4xl sm:text-6xl font-sharkzFont text-primary mb-2">SHARKZ<br/>MEDIA</div>
                <div className="text-sm sm:text-2xl font-customFont text-gray-600 tracking-wide">Videoproduktion und Fotografie aus Rastatt</div>
            </div> : null}
            </div>
            <div className=" max-w-4xl text-center mx-auto py-10 sm:py-16">
                <video autoPlay
                       muted
                       preload="auto"
                       controls={true}
                       className={"w-full text-center mx-auto"}
                       onEnded={handleVideoEnd}
                       onPlay={handleVideoPlay}
                >
                    <source src="https://firebasestorage.googleapis.com/v0/b/sharkzwebsite.appspot.com/o/StartVid.mp4?alt=media&token=99474bd6-0981-41ce-b9a2-0a9282e4f449" type="video/mp4" />
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
                                <h3 className="mt-3 text-blue font-light">
                                        {callout.name}
                                </h3>
                                <p className="text-gray-600 text-xs mb-6 font-semibold">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};