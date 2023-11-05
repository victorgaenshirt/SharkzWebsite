import React from 'react'

interface ServicesProps {
    wrapperClasses? : string;
    id?: string;
}
export const Dienstleistungen: React.FC<ServicesProps> = (props) => {
    const { wrapperClasses, id} = props;
    return (
        <div className={wrapperClasses} id={id}>
            Dienstleistungen
        </div>
    );
};