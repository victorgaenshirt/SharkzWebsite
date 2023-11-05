import React from 'react'

interface HomeProps {
    wrapperClasses? : string;
    id?: string;
}
export const Studio: React.FC<HomeProps> = (props) => {
    const { wrapperClasses, id} = props;
    return (
        <div className={wrapperClasses} id={id}>
            Studio
        </div>
    );
};