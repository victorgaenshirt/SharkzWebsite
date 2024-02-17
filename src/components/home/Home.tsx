import React from 'react'
import videoFile from '../../assets/Logoanimation_Banner_02.mp4';

export const Home: React.FC = () => {

    return (
        <div className="flex flex-1 w-full justify-center mx-auto">
            <video autoPlay muted>
                <source src={videoFile} type="video/mp4" />
            </video>
        </div>
    );
};