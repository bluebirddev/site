import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { WhatWeDo } from './WhatWeDo'
import { OurTechStack } from './OurTechStack'
import { CaseStudies } from './CaseStudies'
import { ClientTestimonials } from './ClientTestimonials'

import logo from '../../public/logo.svg'

import seven from '../../public/clients/22seven.svg'
import banktech from '../../public/clients/banktech.svg'
import bvnk from '../../public/clients/bvnk.svg'
import coindirect from '../../public/clients/coindirect.svg'
import doctorly from '../../public/clients/doctorly.svg'
import layup from '../../public/clients/layup.svg'
import pab from '../../public/clients/pab.svg'
import pepsi from '../../public/clients/pepsi.svg'
import revix from '../../public/clients/revix.svg'
import thorchain from '../../public/clients/thorchain.svg'
import { HowItStarted } from './HowItStarted'
import { OurPeople } from './OurPeople'
import { ContactUs } from './ContactUs'
import { Footer } from './Footer'

export default function Home() {
    return (
        <main className="flex flex-col items-center w-full">
            <header className="hidden lg:flex z-10">
                <Image src={logo} width={168} alt="Picture of the author" />
                <ol className="hidden lg:flex">
                    <li>What We Do</li>
                    <li>Project Showcase</li>
                    <li>Our People</li>
                </ol>
                <div className="hidden lg:flex items-center space-x-4">
                    <button className="tertiary space-x-1.5">
                        <Image
                            src="/calculator.svg"
                            height={20}
                            width={20}
                            alt="Picture of the author"
                        />
                        <span>Quote Calculator</span>
                    </button>
                    <button className="primary">Contact us</button>
                </div>
            </header>
            <div className="container space-y-8 pt-48 items-center justify-center flex flex-col ">
                <h3 className="pill-heading">Bespoke. Excellent. Enduring.</h3>
                <h1>
                    Building <em>Innovative Software</em> with Style and Simplicity
                </h1>
                <p className="max-w-lg text-center">
                    Bluebird Development provides exclusive consulting, development, and design
                    resources for you and your team.
                </p>
                <div className="gap-x-5 gap-y-3 flex flex-col lg:flex-row w-full lg:w-auto">
                    <button className="primary" tabIndex={1}>
                        Quote Calculator
                    </button>
                    <button className="secondary" tabIndex={2}>
                        What We Do
                    </button>
                </div>
            </div>
            <div />
            <div className="max-w-full w-full text-center pt-32 lg:pt-40">
                <h3 className="heading-3">Our Client Lineup</h3>
                <div className="pt-10">
                    <Marquee>
                        <div className="px-6 cursor-pointer">
                            <Image src={seven} height={20} alt="22seven" />
                        </div>
                        <div className="px-6 cursor-pointer mb-[1px]">
                            <Image src={banktech} height={20} alt="BankTech" />
                        </div>
                        <div className="px-6 cursor-pointer">
                            <Image src={bvnk} height={20} alt="BVNK" />
                        </div>
                        <div className="px-6 cursor-pointer">
                            <Image height={20} src={coindirect} alt="Coindirect" />
                        </div>
                        <div className="px-6 cursor-pointer mt-[3px]">
                            <Image src={doctorly} height={24} alt="doctorly" />
                        </div>
                        <div className="px-6 cursor-pointer mt-[6px]">
                            <Image src={layup} height={20} alt="LayUp" />
                        </div>
                        <div className="px-6 cursor-pointer mt-[5px]">
                            <Image src={pab} height={26} alt="pump & abrasion" />
                        </div>
                        <div className="px-6 cursor-pointer">
                            <Image src={pepsi} height={31} alt="Pepsi" />
                        </div>
                        <div className="px-6 cursor-pointer">
                            <Image src={revix} height={20} alt="Revix" />
                        </div>
                        <div className="px-6 cursor-pointer">
                            <Image src={thorchain} height={31} alt="Thorchain" />
                        </div>
                    </Marquee>
                </div>
            </div>
            <WhatWeDo />
            <OurTechStack />
            <CaseStudies />
            <ClientTestimonials />
            <HowItStarted />
            <OurPeople />
            <ContactUs />
            <Footer />
        </main>
    )
}
