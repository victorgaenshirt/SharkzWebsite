import React from 'react'
import content from '../../content.json'


export const Impressum: React.FC = () => {
    return (
        <div>
        <h2>
            {content.impressum.impressum}
        </h2>
        <div>
            {content.impressum.datenschutz}
        </div>
        </div>
    );
};