import React from 'react'
import videoFile from '../../assets/Titelvideo_01.mp4';

export const Home: React.FC = () => {

    return (
        <div className="flex flex-1 w-full">
            <video autoPlay muted>
                <source src={videoFile} type="video/mp4" />
            </video>
        </div>
    );
};