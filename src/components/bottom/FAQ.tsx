import React from 'react'
import content from '../../content.json'
export const FAQ:React.FC = () => {
    return (
        <div className="self-center m-4">
            <h1>Frequently Asked Questions</h1>
            <ul>
                {content.FAQ.map((item, index) => (
                    <li key={index}>
                        <h2 className="my-5 font-bold text-lg">{item.question}</h2>
                        <p className="mb-10 text-lg">{item.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};