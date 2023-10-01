import Image from 'next/image'
import Marquee from 'react-fast-marquee'

import seven from '../../../public/clients/22seven.svg'
import banktech from '../../../public/clients/banktech.svg'
import bvnk from '../../../public/clients/bvnk.svg'
import coindirect from '../../../public/clients/coindirect.svg'
import doctorly from '../../../public/clients/doctorly.svg'
import layup from '../../../public/clients/layup.svg'
import pab from '../../../public/clients/pab.svg'
import pepsi from '../../../public/clients/pepsi.svg'
import revix from '../../../public/clients/revix.svg'
import thorchain from '../../../public/clients/thorchain.svg'

export function Intro() {
    return (
        <>
            <div className="slide slide-left container" id="intro">
                <div className="space-y-8 pt-32 lg:pt-48 items-center justify-center flex flex-col ">
                    <h3 className="pill-heading">Bespoke. Excellent. Enduring.</h3>
                    <h1>
                        Building <em>Innovative Software</em> with Style and Simplicity
                    </h1>
                    <p className="max-w-lg text-center">
                        Bluebird Development provides exclusive consulting, development, and design
                        resources for you and your team.
                    </p>
                    <div className="gap-x-5 gap-y-3 flex flex-col lg:flex-row w-full lg:w-auto">
                        <button className="primary space-x-1.5">
                            <span>Quote Calculator</span>
                            <Image
                                src="/calculator.svg"
                                height={20}
                                width={20}
                                alt="Picture of the author"
                            />
                        </button>
                        <a className="secondary scroll-smooth" href="#what-we-do">
                            What We Do
                        </a>
                    </div>
                </div>
            </div>
            <div />
            <div className="max-w-full w-full text-center pt-32 lg:pt-40">
                <h3 className="heading-3 slide slide-left">Our Client Lineup</h3>
                <div className="pt-10 slide slide-up">
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
        </>
    )
}
