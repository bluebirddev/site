import Image from 'next/image'

import buttonArrow from '@/images/button_arrow.svg'

import aurora from '@/images/case-studies/aurora.png'
import auroraLogo from '@/images/case-studies/aurora-logo.svg'

import raubex from '@/images/case-studies/raubex.png'
import raubexLogo from '@/images/case-studies/raubex-logo.png'

import revio from '@/images/case-studies/revio.webp'
import revioLogo from '@/images/case-studies/revio-logo.svg'
import clsx from 'clsx'

export const CASE_STUDIES = [
    {
        id: 'aurora',
        image: aurora,
        logo: auroraLogo,
        title: 'Aurora',
        description: 'Radically reduce failed payments and churn',
    },
    {
        id: 'raubex',
        image: raubex,
        logo: raubexLogo,
        title: 'Raubex',
        description: 'Radically reduce failed payments and churn',
    },
    {
        id: 'revio',
        image: revio,
        logo: revioLogo,
        title: 'Revio',
        description: 'Radically reduce failed payments and churn',
    },
]

export function CaseStudies() {
    return (
        <section className="pt-24 lg:pt-40 container" id="projects">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                <div className="flex flex-col items-start space-y-8">
                    <h3 className="pill-heading fade fade-left">Project Showcase</h3>
                    <h2 className=" fade fade-left">
                        Selected <em>Case Studies</em>
                    </h2>
                </div>
                <p className="h-full flex flex-col justify-end text-left fade fade-right">
                    This work showcases our expertise in developing tailored software solutions that
                    address complex challenges and deliver measurable results for our clients.
                </p>
            </div>
            <div className="gap-5 flex flex-col lg:flex-row pt-20">
                {CASE_STUDIES.map((caseStudy, i) => (
                    <div
                        className={clsx('fade fade-up', {
                            'lg:w-5/12': i === 0,
                            'lg:w-4/12': i === 1,
                            'lg:w-3/12': i === 2,
                        })}
                        key={caseStudy.title}
                    >
                        <Image src={caseStudy.image} alt={caseStudy.title} />
                        <div className="p-8 card flex flex-col items-start">
                            <Image src={caseStudy.logo} alt={caseStudy.title} width={100} />
                            <p className="pt-4 pb-8 text-lg text-left">
                                <strong className="font-medium">{caseStudy.title}</strong> -{' '}
                                {caseStudy.description}
                            </p>
                            <button className="btn-secondary mt-auto">
                                <span>View Case Study</span>
                                <Image src={buttonArrow} height={20} width={20} alt="button" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
