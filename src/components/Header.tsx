import React from 'react'
import { Disclosure } from '@headlessui/react'
import {
    CloseOutlined,
    InstagramOutlined,
    LinkedinOutlined, MenuOutlined,
    TikTokOutlined,
    YoutubeOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import logo from "../assets/Logo.png"

const navigation = [
    { id: "pakete", name: 'Pakete', href: '#', current: false },
    { id: "business", name: 'Business', href: '#', current: false },
    { id: "hochzeit", name: 'Hochzeiten', href: '#', current: false },
    { id: "social", name: 'Social Media Content', href: '#', current: false },
    { id: "produkte", name: 'Produkte', href: '#', current: false },
    { id: "workshop", name: 'Workshop', href: '#', current: false },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export const Header: React.FC = () => {
    return (
        <Disclosure as="nav" className="bg-primary">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md
                                p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2
                                focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <CloseOutlined className="block" aria-hidden="true" />
                                    ) : (
                                        <MenuOutlined className="block" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                                <Link to={"/"}>
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-8 w-auto"
                                            src={logo}
                                            alt="sharkzMediaLogo"
                                        />
                                    </div>
                                </Link>
                                <div className="hidden md:ml-6 md:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                to={"/" + item.id}
                                                className={classNames(
                                                    item.current ? 'font-customFont bg-gray-900 text-white' : 'font-customFont text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Link to={"https://www.instagram.com/sharkzmedia/"}
                                      className={"text-dimWhite justify-self-center hover:text-offBlue"}>
                                    <InstagramOutlined className={"text-lg sm:text-xl px-2 sm:px-4"}/>
                                </Link>
                                <Link to={"https://www.tiktok.com/@sharkz.media"}
                                      className={"text-dimWhite justify-self-center hover:text-offBlue"}>
                                    <TikTokOutlined className={"text-lg sm:text-xl px-2 sm:px-4"}/>
                                </Link>
                                <Link to={"https://www.linkedin.com/company/sharkz-media/"}
                                      className={"text-dimWhite justify-self-center hover:text-offBlue"}>
                                    <LinkedinOutlined className={"text-lg sm:text-xl px-2 sm:px-4"}/>
                                </Link>
                                <Link to={"https://www.youtube.com/@Sharkz-Media"}
                                      className={"text-dimWhite justify-self-center hover:text-offBlue"}>
                                    <YoutubeOutlined className={"text-lg sm:text-xl px-2 sm:px-4"}/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link to={"/" + item.id}>
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'font-customFont bg-gray-900 text-white' : 'font-customFont text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}