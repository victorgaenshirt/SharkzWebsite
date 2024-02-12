import React, {useEffect, useState} from 'react'
import content from '../content.json'
export const Vorteile: React.FC = () => {

    const vorteileArr = content.Kundennutzen

    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % vorteileArr.length);
        }, 5000);
        return () => {clearInterval(intervalId)}
    }, [vorteileArr.length])

    return (
        <div className="flex flex-col p-5 align-middle justify-center bg-dimWhite h-48">
                {vorteileArr.map((text, index) => (
                    index === currentIndex ?
                        <div key={index}
                             className="text-primary text-xl font-poppins sm:text-4xl">
                            {text}
                    </div> : null
                ))}
        </div>
    );
};