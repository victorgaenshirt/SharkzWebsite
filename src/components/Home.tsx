import React, {useState} from 'react'
import videoFile from '../assets/Webseitettrailer_13(14bitVBR2).mp4';
import {Button} from "react-scroll";


interface HomeProps {
    wrapperClasses? : string;
    id?: string;
}
export const Home: React.FC<HomeProps> = (props) => {
    const { wrapperClasses, id} = props;
    const [muted, setMuted] = useState(true);



    return (
        <div className={wrapperClasses} id={id}>
                <video muted={muted} autoPlay loop >
                    <div onClick={() => {setMuted(!muted)}} >sound </div>
                <source src={videoFile} type="video/mp4"/>
                </video>
            Home Kundennutzen showcase Video
        </div>
    );
};