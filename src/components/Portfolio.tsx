import React from 'react'

interface PortfolioProps {
    wrapperClasses? : string;
    id?: string;
}
export const Portfolio: React.FC<PortfolioProps> = (props) => {
    const { wrapperClasses, id} = props;
    return (
        <div className={wrapperClasses} id={id}>
            Portfolio
        </div>
    );
};