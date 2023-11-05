import React from 'react'

interface TeamProps {
    wrapperClasses? : string;
    id?: string;
}
export const Team: React.FC<TeamProps> = (props) => {
    const { wrapperClasses, id} = props;
    return (
        <div className={wrapperClasses} id={id}>
            Team
        </div>
    );
};