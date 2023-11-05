import React from 'react'

interface ProductionProps {
    wrapperClasses? : string;
    id?: string;
}
export const Produktionsprozess: React.FC<ProductionProps> = (props) => {
    const { wrapperClasses, id} = props;
    return (
        <div className={wrapperClasses} id={id}>
            Produktionsprozess
        </div>
    );
};