import Image from 'next/image'

import aurora from '../../../public/case-studies/aurora.png'
import auroraLogo from '../../../public/case-studies/aurora-logo.svg'

import raubex from '../../../public/case-studies/raubex.png'
import raubexLogo from '../../../public/case-studies/raubex-logo.png'

import revio from '../../../public/case-studies/revio.webp'
import revioLogo from '../../../public/case-studies/revio-logo.svg'

export function CaseStudies() {
    return (
        <div className="pt-24 lg:pt-40 container" id="projects">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                <div className="flex flex-col items-start space-y-8">
                    <h3 className="pill-heading slide slide-left">Project Showcase</h3>
                    <h2 className="heading-2 slide slide-left">
                        Selected <em>Case Studies</em>
                    </h2>
                </div>
                <p className="h-full flex flex-col justify-end text-left slide slide-right">
                    This work showcases our expertise in developing tailored software solutions that
                    address complex challenges and deliver measurable results for our clients.
                </p>
            </div>
            <div className="gap-5 flex flex-col lg:flex-row pt-20">
                <div className="lg:w-5/12 slide slide-up">
                    <Image src={aurora} alt="Aurora" />
                    <div className="p-8 lg:h-[300px] bg-[rgba(14,22,53,.4)] border border-white border-opacity-10 backdrop-blur-md flex flex-col items-start">
                        <Image src={auroraLogo} alt="Aurora" width={100} />
                        <p className="pt-4 pb-8 text-white text-lg text-left">
                            <strong>Aurora</strong> - Radically reduce failed payments and churn
                        </p>
                        <button className="secondary mt-auto space-x-1.5">
                            <span>View Case Study</span>
                            <Image
                                src="/button_arrow.svg"
                                height={20}
                                width={20}
                                alt="Picture of the author"
                            />
                        </button>
                    </div>
                </div>
                <div className="lg:w-4/12 slide slide-up">
                    <Image src={raubex} alt="Raubex" />
                    <div className="p-8 lg:h-[300px] bg-[rgba(14,22,53,.4)] border border-white border-opacity-10 backdrop-blur-md flex flex-col items-start">
                        <Image src={raubexLogo} alt="Raubex" width={100} />
                        <p className="pt-4 pb-8 text-white text-lg text-left">
                            <strong>Aurora</strong> - Radically reduce failed payments and churn
                        </p>
                        <button className="secondary mt-auto space-x-1.5">
                            <span>View Case Study</span>
                            <Image
                                src="/button_arrow.svg"
                                height={20}
                                width={20}
                                alt="Picture of the author"
                            />
                        </button>
                    </div>
                </div>
                <div className="lg:w-3/12 slide slide-up">
                    <Image src={revio} alt="Revio" />
                    <div className="p-8 lg:h-[300px] bg-[rgba(14,22,53,.4)] border border-white border-opacity-10 backdrop-blur-md flex flex-col items-start">
                        <Image src={revioLogo} alt="Revio" width={100} />
                        <p className="pt-4 pb-8 text-white text-lg text-left">
                            <strong>Aurora</strong> - Radically reduce failed payments and churn
                        </p>
                        <button className="secondary mt-auto space-x-1.5">
                            <span>View Case Study</span>
                            <Image
                                src="/button_arrow.svg"
                                height={20}
                                width={20}
                                alt="Picture of the author"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
