import React from 'react'
import content from '../../content.json'
import {Disclosure} from "@headlessui/react";
import {UpOutlined} from "@ant-design/icons";
export const FAQ:React.FC = () => {
    return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 lg:py-32">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-6">Häufig gestellte Fragen</h2>
            {content.FAQ.map((item, index) => (
                <Disclosure key={index} as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-blue hover:bg-lightBlue focus:outline-none focus-visible:ring focus-visible:ring-primary">
                                <span>{item.question}</span>
                                <UpOutlined
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-blue`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-800">
                                {item.answer}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    </div>
    );
};