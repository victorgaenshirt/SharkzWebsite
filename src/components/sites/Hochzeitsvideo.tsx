import React, {useState} from 'react'
import emailjs from "@emailjs/browser";
import { Switch } from '@headlessui/react'
import {Link} from "react-router-dom";

const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID
const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID
export const Hochzeitsvideo: React.FC = () => {

    const [agreed, setAgreed] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    emailjs.init({publicKey: "vEHMM5ADGL8HVvsyN"})

    const classNames = (...classes: any[]) => {
        return classes.filter(Boolean).join(' ')
    }

    const sendMessage = (e: any) => {
        e.preventDefault();


        const vornameHTML = document.getElementById('vorname_id') as HTMLInputElement;
        const nachnameHTML = document.getElementById('nachname_id') as HTMLInputElement;
        const unternehmenHTML = document.getElementById('unternehmen_id') as HTMLInputElement;
        const mailHTML = document.getElementById('mail_id') as HTMLInputElement;
        const telHTML = document.getElementById('tel_id') as HTMLInputElement;
        const nachrichtHTML = document.getElementById('nachricht_id') as HTMLInputElement;
        const templateParams = {
            to_name: 'Sharkz Media!',
            vorname: vornameHTML.value,
            nachname: nachnameHTML.value,
            unternehmen: unternehmenHTML.value,
            mail: mailHTML.value,
            tel: telHTML.value,
            message: nachrichtHTML.value,
        };
        emailjs.send(serviceId!, templateId!, templateParams).then((res) => {
            console.log('SUCCESS!', res.text, res.status);
            // Textfelder leeren
            vornameHTML.value = '';
            nachnameHTML.value = '';
            unternehmenHTML.value = '';
            mailHTML.value = '';
            telHTML.value = '';
            nachrichtHTML.value = '';
            setMessageSent(true);
        }).catch((error) => {
            console.log('FAILED...', error);
        });
    }

    return (
        <div>
        <div className="bg-lightRosa py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:text-center">
                    <h2 className="text-left text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl font-customFont">Hochzeitsvideo</h2>
                    <video autoPlay muted loop controls={true} className={"mt-6 w-full mx-auto my-8"}>
                        <source src={"assets/Hochzeitreel_07.mp4"} type="video/mp4" />
                    </video>
                    <p className="text-left text-gray-600 my-3 text-lg leading-relaxed sm:my-6">
                        Tauche ein in die emotionale Welt der Liebe und Romantik, während wir die schönsten
                        Momente Ihres besonderen Tages einfangen und in zeitlose Erinnerungen verwandeln.
                    </p>
                    <div className="flex max-w-7xl mx-auto flex-1 items-stretch my-8">
                        <div className="flex-col w-3/5 pr-3">
                            <img className="pb-3" src={"assets/blumenm.jpg"} alt="" />
                            <img src={"assets/hochzeit.jpg"} alt="" />
                        </div>
                        <div className="w-2/5 flex flex-col justify-between">
                            <img className="flex flex-1" src={"assets/Hochzeit_12.jpg"} alt="" />
                        </div>
                    </div>
                <p className="text-left my-3 text-gray-600 text-lg leading-relaxed sm:my-6">
                    Mit professioneller Produktion und einem erfahrenen Team erfassen
                    wir jeden Augenblick, damit Sie ihn immer wieder erleben können.
                    Vertrauen Sie uns, um Ihre Liebe und Ihren Glanz in bewegenden Bildern festzuhalten und sie zu
                    zeitlosen Erinnerungen zu machen.
                </p>
                <div className={"grid grid-cols-2 sm:grid-cols-3 gap-3 my-8"}>
                    <img src={"assets/Hochzeit_08.jpg"} alt="" />
                    <img src={"assets/Hochzeit_15.jpg"} alt="" />
                    <img src={"assets/Hochzeit_16.1.jpg"} alt="" />
                    <img src={"assets/Hochzeit_14.jpg"} alt="" />
                    <img src={"assets/Hochzeit_17.jpg"} alt="" />
                    <img src={"assets/Hochzeit_19.jpg"} alt="" />
                </div>
                <p className="text-left my-3 text-gray-600 text-lg leading-relaxed sm:my-6">
                Unsere Hochzeitsvideos sind mehr als nur Aufnahmen - sie sind gefühlvolle Erinnerungen an den
                schönsten Tag in Ihrem Leben.
                </p>
                <video autoPlay muted loop controls={true} className={"w-full mx-auto my-8"}>
                    <source src={"assets/Hochzeitreel_06.mp4"} type="video/mp4" />
                </video>
            </div>
        </div>
        </div>
    <div className="bg-lightRosa pb-16">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-customFont tracking-wide mx-6">Schreib uns!</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 mx-6">
                Kontaktiere uns jetzt und wir machen einen Termin zu einem unverbindlichen Erstgespräch.
            </p>
        </div>
        <form action="" id={"contact_form"} method="POST" className="ss:mx-auto mt-3 max-w-xl sm:mt-6 mx-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="vorname" aria-required={true} className="block text-sm font-semibold leading-6 text-gray-900">
                        Vorname
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="from_name"
                            id="vorname_id"
                            autoComplete="given-name"
                            className="bg-white block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Nachname
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="last-name"
                            id="nachname_id"
                            autoComplete="family-name"
                            className="bg-white block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                        Hochzeitsdatum & Location
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="company"
                            id="unternehmen_id"
                            autoComplete="organization"
                            className="bg-white block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2.5">
                        <input
                            required={true}
                            type="email"
                            name="mail_from"
                            id="mail_id"
                            autoComplete="email"
                            className="bg-white block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="tel" className="block text-sm font-semibold leading-6 text-gray-900">
                        Telefon / Mobil
                    </label>
                    <div className="mt-2.5">
                        <input
                            required={true}
                            type="tel"
                            name="phone-number"
                            id="tel_id"
                            autoComplete="tel"
                            className="bg-white block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        Message
                    </label>
                    <div className="mt-2.5">
              <textarea
                  name="message"
                  id="nachricht_id"
                  rows={4}
                  className="bg-white block w-full rounded-md border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                  defaultValue={''}
              />
                    </div>
                </div>
                <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                    <div className="flex h-6 items-center">
                        <Switch
                            checked={agreed}
                            onChange={setAgreed}
                            className={classNames(
                                agreed ? 'bg-blue' : 'bg-gray-200',
                                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue'
                            )}
                        >
                            <span className="sr-only">Agree to policies</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                )}
                            />
                        </Switch>
                    </div>
                    <Switch.Label className="text-sm leading-6 text-gray-600">
                        Durch die Auswahl dieser Option erklären Sie sich mit unserer{' '}
                        <Link to={"/impressum"}className="font-semibold text-blue">
                            Datenschutzerklärung&nbsp;
                        </Link>
                        einverstanden.
                    </Switch.Label>
                </Switch.Group>
            </div>
            <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full disabled:bg-lightBlue rounded-md bg-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm
                        transition-transform transform-gpu hover:scale-105 focus:outline-none duration-300 ease-in-out"
                    disabled={!agreed}
                    onClick={sendMessage}
                >
                    Senden
                </button>
                {messageSent ? <p className={"mt-2 text-lg leading-8 text-gray-600"}>
                    Danke für deine Nachricht! Wir werden uns sobald wie möglich darum kümmern.
                </p> : null}
            </div>
        </form>
    </div>
        </div>
    );
};