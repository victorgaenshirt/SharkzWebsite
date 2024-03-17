import React from 'react'

const people = [
    {
        firstname: 'Joshua',
        surname: 'Jung',
        role: 'Geschäftsführung / Regie',
        imageUrl: "assets/Joshuax720p.jpg",
    },
    {
        firstname: 'Nicolai',
        surname: 'Strack',
        role: 'Kameramann / Maschinenbau',
        imageUrl: "assets/Nicolaix720p_02.jpg",
    },
    {
        firstname: 'Marco',
        surname: 'Zacharias',
        role: 'Tonmann / Sounddesign',
        imageUrl: "assets/Marcox720p.jpg"
    }
]
export const Team: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className=" max-w-6xl text-center mx-auto py-10 sm:py-16">
            <div className="mx-auto text-center max-w-4xl lg:max-w-6xl gap-x-8 gap-y-20 px-6 lg:px-8">
                <h2 className="text-center text-2xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Das ist Sharkz Media</h2>
                <p className="my-10 sm:text-lg text-sm leading-relaxed text-gray-600 ">
                    Sharkz Media ist ein aufstrebendes Foto-/ Videoproduktionsunternehmen aus Rastatt, das sich auf die Erstellung hochwertiger Videolösungen spezialisiert hat.
                    Unsere Vision ist es, durch innovative Videoproduktionstechniken und kreative Ansätze Unternehmen zu helfen, ihre Markenpräsenz zu stärken und ihre Botschaft effektiv zu vermitteln.
                </p>
                <ul role="list" className="grid max-w-4xl gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-16 mx-auto text-center">
                    {people.map((person,index) => (
                        <li key={index} className={"mx-auto items-center text-center w-4/5"}>
                            <div className="flex flex-1 gap-x-6">
                                <img className="h-20 w-20 sm:h-32 sm:w-32 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="font-semibold leading-relaxed tracking-tight text-gray-900">{person.firstname}<br/>{person.surname}</h3>
                                    <p className="text-xs font-semibold leading-relaxed text-blue">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
                <video autoPlay muted controls={true} className={"max-w-3xl mt-24 w-full mx-auto"}>
                    <source src={"assets/ÜberunsVideo_02.mp4"} type="video/mp4" />
                </video>
        </div>
        </div>
    );
};
