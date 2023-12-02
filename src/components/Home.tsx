import React, {useEffect, useState} from 'react'
import videoFile from '../assets/Webseitettrailer_13(14bitVBR2).mp4';
import content from '../content.json';
import Slider from 'react-slick';


interface HomeProps {
    wrapperClasses? : string;
    id?: string;
}
export const Home: React.FC<HomeProps> = (props) => {
    const { wrapperClasses, id} = props;
    const [muted, setMuted] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = content.Kundennutzen;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex, slides.length]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    };

    return (
        <div className={wrapperClasses} id={id}>
                <div className="absolute top-30 left-1 w-screen" onClick={() => {setMuted(!muted)}} >sound
                </div>
                <video muted={muted} autoPlay loop>
                <source src={videoFile} type="video/mp4"/>
                </video>

        </div>
    );
};