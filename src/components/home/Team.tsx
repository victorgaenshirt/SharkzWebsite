import React from 'react'
import joshua from "../../assets/Joshuax720p.jpg";
import nicolai from "../../assets/Nicolaix720p.jpg";
import marco from "../../assets/Marcox720p.jpg";

const people = [
    {
        name: 'Nicolai Strack',
        role: 'Kameramann / Maschinenbau',
        imageUrl:
            nicolai,
    },
    {
        name: 'Joshua Jung',
        role: 'Geschäftsführung / Regie',
        imageUrl:
        joshua,
    },
    {
        name: 'Marco Zacharias',
        role: 'Tonmann / Sounddesign',
        imageUrl:
            marco
    }
    // More people...
]
export const Team: React.FC = () => {
    return (
        <div className="bg-gray-100 py-24 sm:py-32" id="team">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-6xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Das ist Sharkz Media</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Sharkz Media ist ein aufstrebendes Videoproduktionsunternehmen aus Rastatt, das sich auf die Erstellung hochwertiger Videolösungen spezialisiert hat.
                    </p>
                    <p className="text-lg leading-8 text-gray-600">
                        Unsere Vision ist es, durch innovative Videoproduktionstechniken und kreative Ansätze Unternehmen zu helfen, ihre Markenpräsenz zu stärken und ihre Botschaft effektiv zu vermitteln.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-16 xl:col-span-3">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-20 w-20 sm:h-40 sm:w-40 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-blue">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
