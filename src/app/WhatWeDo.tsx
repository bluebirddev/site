import Image from 'next/image'

const CARDS = [
    {
        title: 'App Development',
        icon: '/what-we-do/app.svg',
        content:
            'Native or cross-platform — we take the hassle out of mobile development, and deliver beautiful apps quickly and cost effectively.',
    },
    {
        title: 'Web Development',
        icon: '/what-we-do/web.svg',
        content:
            'Using modern technologies combined with the latest web standards, we create performant, responsive, sleek, and secure websites.',
    },
    {
        title: 'Infrastructure Development',
        icon: '/what-we-do/infrastructure.svg',
        content:
            'We develop everything from banking solutions to logistic systems and have the server-, database-, and services development experience to tackle any problem.',
    },
    {
        title: 'Product Management',
        icon: '/what-we-do/pm.svg',
        content:
            'Using Agile methodologies and effective time management we provide accurate expectations and deliver on time.',
    },
    {
        title: 'UX/UI Design',
        icon: '/what-we-do/ux.svg',
        content:
            'Working with a wide range of designers and employing a multi-iterative approach, we invent powerful brands and provide pixel perfect fine tuning to existing solutions.',
    },
    {
        title: 'Developer Oursourcing',
        icon: '/what-we-do/outsourcing.svg',
        content:
            'We draw from our tried and tested developer network to pull together talent that meets your technology needs.',
    },
    {
        title: 'API & System Development',
        icon: '/what-we-do/api.svg',
        content:
            'We craft robust and efficient APIs that seamlessly integrate diverse software systems, enabling streamlined data exchange and automation.',
    },
]

export function WhatWeDo() {
    return (
        <div className="pt-40 container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col items-start space-y-8">
                    <h3 className="pill-heading">What We Do</h3>
                    <h2 className="heading-2">
                        Bluebird is your new <em>Technology Partner</em>
                    </h2>
                </div>
                <p className="h-full flex flex-col justify-end text-left">
                    We offer exclusive consulting, development and design resources for some of the
                    world’s most innovative, enduring systems.
                </p>
            </div>
            <div className="pt-12 lg:pt-32 flex flex-col lg:flex-row flex-wrap justify-center gap-y-4 lg:gap-x-4 lg:gap-y-12">
                {CARDS.map((card) => (
                    <div
                        className="border w-full lg:w-[280px] border-white border-opacity-10 backdrop-blur-md p-6 bg-[rgba(14,22,53,.4)]"
                        key={card.title}
                    >
                        <div className="h-12 w-12 border border-white border-opacity-10 bg-white bg-opacity-10 flex items-center justify-center">
                            <Image src={card.icon} height={28} width={28} alt={card.title} />
                        </div>
                        <h2 className="text-[20px] leading-[25px] font-bold pt-8">{card.title}</h2>
                        <p className="text-left pt-4">{card.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
