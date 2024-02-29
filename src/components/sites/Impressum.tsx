import React from 'react'
import content from '../../content.json'


export const Impressum: React.FC = () => {
    return (
        <div>
            <h2 className={"text-lg m-6"}>
                {content.impressum.impressum}
            </h2>
            <div className={"text-lg m-6"}>
                {content.impressum.datenschutz}
            </div>
        </div>
    );
};