import React from 'react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import {Link} from "react-router-dom";
import emailjs from "@emailjs/browser"


const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID
const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID

export const Kontakt: React.FC = () => {
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
        <div className="bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-customFont tracking-wide mx-6">Schreib uns!</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 mx-6">
                    Kontaktiere uns jetzt und erhalte einen Gratis Kostenvoranschlag
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
                            Unternehmen
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
    );
};