import React, {useState} from 'react'
import videoFile from '../assets/Webseitettrailer_13(14bitVBR2).mp4';
import {SoundOutlined} from "@ant-design/icons";

interface HomeProps {
    wrapperClasses? : string;
    id?: string;
}
export const Home: React.FC<HomeProps> = (props) => {
    const { wrapperClasses, id} = props;
    const [muted, setMuted] = useState(true);


    return (
        <div className={wrapperClasses} id={id}>
            <div className="absolute top-30 left-1 w-screen" onClick={() => {setMuted(!muted)}} >
                <SoundOutlined />
            </div>
            <video autoPlay loop muted={muted}>
                <source src={videoFile} type="video/mp4" />
            </video>
            Home Kundennutzen showcase Video
        </div>
    );
};