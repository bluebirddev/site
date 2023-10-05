import Image from 'next/image'
import main from '@/images/case-studies/aurora/main.png'

import buttonArrow from '@/images/button_arrow.svg'
import challenge from '@/images/case-studies/aurora/challenge.png'
import mockup from '@/images/case-studies/aurora/mockup.png'
import approach from '@/images/case-studies/aurora/approach.jpg'
import process from '@/images/case-studies/aurora/process.png'
import buildProcess from '@/images/case-studies/aurora/build_process.jpg'
import { CASE_STUDIES } from '@/app/_sections/CaseStudies'
import clsx from 'clsx'

export default function AuroraPage() {
    return (
        <div className="container pt-32 lg:pt-52 pb-24 lg:pb-32 space-y-24 lg:space-y-36">
            <section className="flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2 xl:w-3/5 text-left flex flex-col items-start gap-y-8">
                    <h3 className="pill-heading fade fade-left">Client Testimonials</h3>
                    <h2 className="fade fade-left">
                        Tool for carbon footprint awareness and offsetting
                    </h2>
                    <p>
                        Aurora was initially built by another development company. They lacked
                        adaptability which resulted in an unmaintainable code base. We were
                        initially tasked only to finish the original MVP, but it soon became clear
                        that we had to re-write everything. The original project ran for more than
                        one year, and we rebuilt it in three months.
                    </p>
                    <h3 className="pt-4">Services We Offered Aurora</h3>
                    <ul className="flex flex-wrap gap-5">
                        {[
                            'Web App Architecture and Development',
                            'Cloud Hosting',
                            'API Architecture and Development',
                            'China Deployment',
                        ].map((service, i) => (
                            <li
                                key={i}
                                className="p-4 border border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur-lg"
                            >
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1">
                    <Image src={main} alt="aurora" />
                </div>
            </section>

            <section className="card flex flex-col lg:flex-row p-4 sm:p-8 lg:p-14 gap-14 items-stretch">
                <div className="flex-1 relative">
                    <Image
                        src={challenge}
                        style={{
                            objectFit: 'cover',
                            height: '100%',
                        }}
                        alt="aurora"
                    />
                </div>
                <div className="space-y-7 flex-1 flex-col flex items-start">
                    <h2>The Challenge</h2>
                    <h3 className="pill-heading fade fade-left">Concept Behind the Product</h3>
                    <p>
                        A tool in which individuals can determine their carbon emissions and allow
                        them to reduce or eliminate their footprint through various mechanisms.
                    </p>
                    <h3 className="pill-heading fade fade-left">Gap in the Market</h3>
                    <p>
                        Their goal at this time was to become the tool for carbon footprint
                        awareness and offsetting, ultimately creating a more sustainable world.
                    </p>
                    <h3 className="pill-heading fade fade-left">The Problem</h3>
                    <p>
                        General lack of awareness and effort on many individuals when it comes to
                        living in and creating a more sustainable world.
                    </p>
                </div>
            </section>

            <section className="space-y-12">
                <h2>The Bluebird Approach</h2>
                <div className="card flex flex-col p-4 sm:p-8 lg:p-14 space-y-8 justify-start">
                    <h3>What we needed to know</h3>
                    <ul className="space-y-5 text-left">
                        {[
                            <>
                                We have never launched a product in China before. We had to learn
                                the requirements around hosting as well as determine which
                                dependencies would need to be replaced due to their firewall.
                            </>,
                            <>
                                The project we took over had an obscure implementation, constructed
                                and implemented by certain data scientists with whom we had no
                                contact with.
                            </>,
                            <>
                                The most complex part of the initial product was how the App’s
                                questions translated into carbon emissions.
                            </>,
                        ].map((item, i) => (
                            <li className="bg-white bg-opacity-10 p-4 text-sm inline-block" key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-10 flex-col lg:flex-row">
                    <div className="card lg:w-3/5 flex flex-col p-4 sm:p-8 lg:p-14 space-y-8 justify-start">
                        <h3>How we uncovered this information</h3>
                        <ul className="space-y-5 text-left">
                            {[
                                <>
                                    Lots of research in China hosting as well as WeChat business
                                    application process and documentation.
                                </>,
                                <>
                                    By digging into the unstructured and undocumented calculation
                                    functions, we were able to determine the original intention and
                                    design a calculation engine which was both easy to work with as
                                    well as scalable
                                </>,
                            ].map((item, i) => (
                                <li
                                    className="bg-white bg-opacity-10 p-4 text-sm inline-block"
                                    key={i}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 relative">
                        <Image
                            src={approach}
                            fill
                            // Not doing anything.  To shut up warning.
                            sizes="(max-width: 768px) 100vw, 100vw"
                            style={{
                                objectFit: 'cover',
                            }}
                            alt="aurora"
                        />
                    </div>
                </div>
            </section>

            <Image src={mockup} alt="aurora" />

            <section className="space-y-12">
                <h2>The Bluebird Process</h2>

                <div className="card flex flex-col lg:flex-row p-4 sm:p-8 lg:p-14 gap-14 items-stretch">
                    <div className="space-y-7 flex-1 flex-col flex items-start">
                        <h3>The Design Process</h3>
                        <ul className="space-y-5 text-left">
                            {[
                                <>Ensure configurability using Retool.</>,
                                <>
                                    Work through several entity relation diagrams for the new
                                    database.
                                </>,
                                <>
                                    Determine architecture for dynamic quiz and dynamic calculation
                                    engine.
                                </>,
                            ].map((item, i) => (
                                <li
                                    className="bg-white bg-opacity-10 p-4 text-sm inline-block"
                                    key={i}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1">
                        <Image
                            src={process}
                            style={{
                                height: '100%',
                                width: 'auto',
                            }}
                            alt="aurora"
                        />
                    </div>
                </div>

                <div className="card flex flex-col lg:flex-row p-4 sm:p-8 lg:p-14 gap-14 items-stretch">
                    <div className="flex-1 relative">
                        <Image
                            src={buildProcess}
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                            }}
                            alt="aurora"
                        />
                    </div>
                    <div className="space-y-7 flex-1 flex-col flex items-start">
                        <h3>The Build Process</h3>
                        <ul className="space-y-5 text-left">
                            {[
                                <>Setup CI/CD for development and production environments.</>,
                                <>Build React web application in parallel with API features.</>,
                                <>
                                    Build Authentication, dynamic quiz engine and dynamic
                                    calculation engine.
                                </>,
                                <>Implement code-first database solution and .NET API.</>,
                            ].map((item, i) => (
                                <li
                                    className="bg-white bg-opacity-10 p-4 text-sm inline-block"
                                    key={i}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-12">
                <div className="flex flex-col lg:flex-row gap-y-4 justify-between items-center">
                    <h2>What we achieved</h2>
                    <h3 className="pill-heading">
                        Company and product bought by the largest insurance company in Africa
                    </h3>
                </div>
                <div className="card p-6">
                    <ul className="list-disc pl-6 text-sm text-opacity-60 space-y-2">
                        <li>
                            A very user-friendly carbon footprint calculator and awareness tool,
                            built to be highly configurable and scalable.
                        </li>
                        <li>
                            The user would enter on the quiz and answer lifestyle questions around
                            food consumption, travel usage and other sustainability focused areas.
                        </li>
                        <li>
                            The app would suggest tips on what they can do to offset their emissions
                            based on their quiz input
                        </li>
                    </ul>
                </div>
            </section>

            <section className="space-y-12">
                <h2>More Case Studies</h2>
                <div className="flex flex-col lg:flex-row gap-4">
                    {CASE_STUDIES.filter((caseStudy) => caseStudy.id !== 'aurora').map(
                        (caseStudy) => (
                            <div
                                className={clsx('fade fade-up flex flex-col', {})}
                                key={caseStudy.title}
                            >
                                <Image src={caseStudy.image} alt={caseStudy.title} />
                                <div className="p-6 lg:p-8 card flex flex-col items-start flex-1">
                                    <Image src={caseStudy.logo} alt={caseStudy.title} width={100} />
                                    <p className="pt-4 pb-8 text-lg text-left">
                                        <strong className="font-medium">{caseStudy.title}</strong> -{' '}
                                        {caseStudy.description}
                                    </p>
                                    <button className="btn-secondary mt-auto">
                                        <span>View Case Study</span>
                                        <Image
                                            src={buttonArrow}
                                            height={20}
                                            width={20}
                                            alt="button"
                                        />
                                    </button>
                                </div>
                            </div>
                        ),
                    )}
                </div>
            </section>
        </div>
    )
}
