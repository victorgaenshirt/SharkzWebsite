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

const navigation = [
    { id: "", name: 'Home', href: '#', current: false },
    { id: "business", name: 'Business', href: '#', current: false },
    { id: "social", name: 'Social Media', href: '#', current: false },
    { id: "produkte", name: 'Produkte', href: '#', current: false },
    { id: "musikvideo", name: 'Musikvideo', href: '#', current: false },
    { id: "hochzeit", name: 'Hochzeiten', href: '#', current: false },
    { id: "workshop", name: 'Workshop', href: '#', current: false },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export const Header: React.FC = () => {
    return (
                <div>
                    <img alt="Headerdesign" src={"assets/Headerdesign_02.png"}/>
        <Disclosure as="nav" className="bg-primary">
            {({ open }) => (
                    <div className="bg-primary mx-auto">
                        <div className="relative flex h-16 items-center justify-between ml-6">
                            <div className="absolute inset-y-0 left-0 flex items-center lgx:hidden">
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
                            <div className="flex flex-1 items-center lgx:items-stretch justify-start">
                                    <div className="flex items-center ml-12">
                                        <img
                                            className="h-8 w-8 hover:fill-current fill-current text-blue-500"
                                            src={"assets/jj_shark_logo_Vector-black.svg"}
                                            alt="sharkzMediaLogo"
                                        />
                                    </div>
                                <div className="hidden lgx:ml-6 lgx:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item,index) => (
                                            <Link
                                                key={index}
                                                to={"/" + item.id}
                                                className={classNames(
                                                    item.current ? 'font-customFont bg-gray-900 text-white tracking-wider' : 'font-customFont text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium tracking-wider'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 content-center flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Link to={"https://www.instagram.com/sharkzmedia/"}
                                      className={"text-dimWhite hover:text-offBlue"}>
                                    <InstagramOutlined className={"text-lg flex my-auto sm:text-xl px-3 sm:px-6"}/>
                                </Link>
                                <Link to={"https://www.tiktok.com/@sharkz.media"}
                                      className={"text-dimWhite hover:text-offBlue"}>
                                    <TikTokOutlined className={"text-lg flex my-auto sm:text-xl px-3 sm:px-6"}/>
                                </Link>
                                <Link to={"https://www.linkedin.com/company/sharkz-media/"}
                                      className={"text-dimWhite hover:text-offBlue"}>
                                    <LinkedinOutlined className={"text-lg flex my-auto sm:text-xl px-3 sm:px-6"}/>
                                </Link>
                                <Link to={"https://www.youtube.com/@Sharkz-Media"}
                                      className={"text-dimWhite hover:text-offBlue"}>
                                    <YoutubeOutlined className={"text-lg flex my-auto sm:text-xl px-3 sm:px-6"}/>
                                </Link>
                            </div>
                        </div>
                    <Disclosure.Panel className="lgx:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item,index) => (
                                <Link to={"/" + item.id} key={index}>
                                <Disclosure.Button
                                    key={index}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'font-customFont bg-gray-900 text-white tracking-wider' : 'font-customFont text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium tracking-wider'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
            </div>
    )
}