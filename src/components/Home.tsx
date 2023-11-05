import React from 'react'

interface HomeProps {
    wrapperClasses? : string;
    id?: string;
}
export const Home: React.FC<HomeProps> = (props) => {
    const { wrapperClasses, id} = props;
    return (
        <div className={wrapperClasses} id={id}>
            {/*
            <video width="640" height="360" controls>
                <source src="pfad_zum_video.mp4" type="video/mp4">
                    Dein Browser unterstützt keine Video-Wiedergabe.
            </video>
            */}
            Home Kundennutzen showcase Video
        </div>
    );
};