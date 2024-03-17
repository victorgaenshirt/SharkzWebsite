import React from 'react'
import content from '../../content.json'


export const Impressum: React.FC = () => {
    const impressumText = content.impressum.impressum.replace(/\n/g, '<br>');
    const datenschutzText = content.impressum.datenschutz.replace(/\n/g, '<br>');

    return (
        <div className={"bg-gray-100"}>
            <h2 className={"text-lg font-medium p-6 max-w-4xl mx-auto leading-relaxed"}>
                <span dangerouslySetInnerHTML={{ __html: impressumText }} />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <span dangerouslySetInnerHTML={{ __html: datenschutzText }} />
            </h2>
        </div>
    );
};