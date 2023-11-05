import React from 'react'

interface PacketsProps {
    wrapperClasses? : string;
    id?: string;
}
export const Pakete: React.FC<PacketsProps> = (props) => {
    const { wrapperClasses, id} = props;
    return (
        <div className={wrapperClasses} id={id}>
            Pakete
        </div>
    );
};