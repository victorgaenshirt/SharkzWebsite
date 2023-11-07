import React from 'react'
import videoFile from '../assets/Webseitettrailer_13(14bitVBR2).mp4';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HomeProps {
    wrapperClasses? : string;
    id?: string;
}
export const Home: React.FC<HomeProps> = (props) => {
    const { wrapperClasses, id} = props;
    const sliderContent = [
        "Text 1",
        "Text 2",
        "Text 3",
        // Weitere Texte hier
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={wrapperClasses} id={id}>
            <Slider {...sliderSettings}>
                {sliderContent.map((text, index) => (
                    <div key={index}>
                        <h2>{text}</h2>
                    </div>
                ))}
            </Slider>
            <video autoPlay controls loop>
                <source src={videoFile} type="video/mp4" />
            </video>
            Home Kundennutzen showcase Video
        </div>
    );
};