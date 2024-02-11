import React, {useState} from 'react'
import videoFile from '../assets/Webseitettrailer_13(14bitVBR2).mp4';
import {SoundOutlined} from "@ant-design/icons";

export const Home: React.FC = () => {
    const [muted, setMuted] = useState(true);


    return (
        <div>
            <div>
                <div className="absolute top-35 left-5" onClick={() => {setMuted(!muted)}} >
                    <SoundOutlined />
                </div>
                <video autoPlay loop muted={muted} >
                    <source src={videoFile} type="video/mp4" />
                </video>
            </div>
            <div>
                <img src={"/assets/"} width="50" height="50" alt="sharkzLogo" className="m-10 justify-self-start flex"/>
            </div>
        </div>
    );
};