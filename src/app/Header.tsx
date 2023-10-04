import Image from 'next/image'

import logo from '@/images/logo.svg'
import calculator from '@/images/calculator.svg'

import { MobileHeader } from './MobileHeader'
import { sections } from './header_sections'

export const HEADER_HEIGHT = 96

export function Header() {
    return (
        <>
            <header
                className="lg:flex z-[101] justify-between lg:justify-between fade fade-down py-5 px-8 flex items-center bg-primary bg-opacity-60
                fixed top-0 left-0 right-0 backdrop-blur-xl"
                style={{
                    height: HEADER_HEIGHT,
                }}
            >
                <a className="hover:scale-90 transition" href="#intro">
                    <Image src={logo} width={168} alt="Picture of the author" />
                </a>
                <ol className="hidden lg:flex">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className="text-white text-opacity-60 font-medium p-4 cursor-pointer hover:text-opacity-100 transition"
                            >
                                {section.label}
                            </a>
                        </li>
                    ))}
                </ol>
                <div className="hidden lg:flex items-center space-x-4">
                    <button className="btn-tertiary">
                        <span>Quote Calculator</span>
                        <Image
                            src={calculator}
                            height={20}
                            width={20}
                            alt="Picture of the author"
                        />
                    </button>
                    <a className="btn-primary" href="#contact-us">
                        Contact us
                    </a>
                </div>
            </header>
            <MobileHeader />
        </>
    )
}
