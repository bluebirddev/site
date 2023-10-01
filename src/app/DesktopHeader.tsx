import Image from 'next/image'

import logo from '../../public/logo.svg'

export function Header() {
    return (
        <header className="lg:flex z-10">
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
            <div>
                <Image src="/close.svg" width={40} height={40} alt="Picture of the author" />
            </div>
        </header>
    )
}
