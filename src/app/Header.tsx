import Image from 'next/image'

import logo from '../../public/logo.svg'
import { MobileHeader } from './MobileHeader'
// import { MobileHeader, useMobileHeader } from './MobileHeader'

export const HEIGHT = 96

export function Header() {
    // const { button, component } = useMobileHeader()

    return (
        <>
            <header
                className="lg:flex z-[101] justify-between lg:justify-between slide slide-down"
                style={{
                    height: HEIGHT,
                }}
            >
                <a className="hover:scale-90 transition" href="#intro">
                    <Image src={logo} width={168} alt="Picture of the author" />
                </a>
                <ol className="hidden lg:flex">
                    <li>
                        <a href="#what-we-do">What We Do</a>
                    </li>
                    <li>
                        <a href="#projects">Project Showcase</a>
                    </li>
                    <li>
                        <a href="#people">Our People</a>
                    </li>
                </ol>
                <div className="hidden lg:flex items-center space-x-4">
                    <button className="tertiary space-x-1.5">
                        <span>Quote Calculator</span>
                        <Image
                            src="/calculator.svg"
                            height={20}
                            width={20}
                            alt="Picture of the author"
                        />
                    </button>
                    <a className="primary" href="#contact-us">
                        Contact us
                    </a>
                </div>
            </header>
            <MobileHeader />
        </>
    )
}
