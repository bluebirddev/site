'use client'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'
import Image from 'next/image'

import alex from '@/images/testimonials/alex.png'
import danielle from '@/images/testimonials/danielle.jpeg'
import michail from '@/images/testimonials/michail.jpeg'
import philip from '@/images/testimonials/philip.jpg'
import stefan from '@/images/testimonials/stefan.png'

const blocks = [
    {
        title: 'Lead Product Manager, Fintech Lab',
        person: 'Stefan Griesel',
        icon: stefan,
        testimonial:
            "Thanks to Bluebird Development's work, the client onboarded three end customers at launch. Within a year, the app processed 500,000 transactions. The team worked well with the Agile methodology, meeting milestones ahead of time. Their efficiency, flexibility, and expertise also stood out.",
    },
    {
        person: 'Philip Mourarrige',
        title: 'Group CEO, Ambermacs PTY LTD',
        icon: philip,
        testimonial:
            "We've used Bluebird for three of our company websites and have been impressed with the speed and quality of work. They built a website for our macadamia factory in White River, a community portal for our growers, and finally most recently has produced an excellent website for our newly launched macadamia milk. All three websites were understood by Bluebird intuitively and executed professionally and in a timely manner. I would definitely recommend them!",
    },
    {
        person: 'Danielle Laity',
        title: 'Head of Strategy, Aurora Sustainability',
        icon: danielle,
        testimonial:
            'Bluebird Development worked quickly without compromising the quality of their work. They maintained an excellent communication approach and provided regular updates on the progress of deliverables. Their skillset in development was impressive',
    },
    {
        person: 'Michail Scholiadis',
        title: 'Partner, BSC Global',
        icon: michail,
        testimonial:
            "Bluebird Development has been greatly contributing to the internal team's development project. Additionally, their culture and speed of work have been a great fit for the company. The entire team has been responsive and responsible, and there are no troubles with their work.",
    },
    {
        person: 'Alessandro Mion',
        title: 'Co-founder, Scriptex',
        icon: alex,
        testimonial:
            'Our company has worked with Bluebird on several occasions and it’s been great working with such adedicated and well skilled team. Their ability to correctly understand client requirements andtimeously deliver upon them using the right tech-fit is one of their greatest attributes.',
    },
]

function getIndex(index: number, length: number) {
    if (index < 0) return getIndex(length + index, length)
    return index % length
}
const ADJACENT_ITEMS = 2

export function ClientTestimonials() {
    const [index, _setIndex] = useState(0)
    const [direction, setDirection] = useState<'left' | 'right' | undefined>(undefined)

    function setIndex(newIndex: number) {
        if (newIndex > index) setDirection('right')
        else if (newIndex < index) setDirection('left')
        _setIndex(newIndex)
    }

    return (
        <section className="w-full max-w-full flex flex-col items-center overflow-hidden pt-32 lg:pt-48 ">
            <div className="space-y-8 flex flex-col items-center pb-24 px-4">
                <h3 className="pill-heading fade fade-left">Client Testimonials</h3>
                <h2 className=" text-center fade fade-left">
                    <em>Working</em> with Bluebird
                </h2>
            </div>
            <div className="w-full md:max-w-[90%] lg:w-[780px] relative fade fade-right">
                <div className="absolute inset-0 mx-auto flex items-center">
                    <button
                        className={
                            'absolute left-[4px] lg:left-[-4px] z-10 h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white flex items-center justify-center transition ' +
                            'hover:bg-neutral-200 active:bg-neutral-300'
                        }
                        onClick={() => setIndex(index - 1)}
                    >
                        <ChevronLeftIcon className="h-8 text-[rgb(13,22,53)]" />
                    </button>
                    <button
                        className={
                            'absolute right-[4px] lg:right-[-4px] z-10 h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white flex items-center justify-center transition ' +
                            'hover:bg-neutral-200 active:bg-neutral-300'
                        }
                        onClick={() => setIndex(index + 1)}
                    >
                        <ChevronRightIcon className="h-8 text-[rgb(13,22,53)]" />
                    </button>
                </div>
                <div
                    className="whitespace-nowrap w-full transition duration-700 ease-out relative h-[600px] sm:h-[500px] lg:h-[400px]"
                    style={
                        {
                            // transform: `translateX(calc(${0 - index * 100}%))`,
                        }
                    }
                >
                    <div className="h-full w-full" />
                    {blocks.map((block, i) => {
                        const adjIndex = getIndex(i - index, blocks.length)

                        return (
                            <div
                                key={i}
                                className={clsx('inline-block w-full px-6 absolute top-0 h-full', {
                                    'opacity-20': adjIndex !== ADJACENT_ITEMS,
                                    'transition-all duration-700':
                                        (adjIndex > 0 && adjIndex < ADJACENT_ITEMS * 2) ||
                                        (direction === 'left' && adjIndex === ADJACENT_ITEMS * 2) ||
                                        (direction === 'right' && adjIndex === 0),
                                })}
                                style={{
                                    transform: `translateX(calc(${
                                        (adjIndex - ADJACENT_ITEMS) * 100
                                    }%))`,
                                }}
                            >
                                <div className="bg-[rgba(14,22,53,.4)] flex flex-col items-center backdrop-blur-md border border-white border-opacity-10 h-full transition duration-700 relative px-10 py-12 lg:px-12 lg:py-16">
                                    <div
                                        className={clsx(
                                            'absolute top-[-36px] bg-[#f3883c] h-16 w-16 rounded-full flex items-center justify-center text-[80px] transition duration-700',
                                            {
                                                'opacity-0': adjIndex !== ADJACENT_ITEMS,
                                            },
                                        )}
                                    >
                                        <span className="mt-10">“</span>
                                    </div>
                                    <p className="text-left max-w-full whitespace-normal flex-1 overflow-y-auto">
                                        {block.testimonial}
                                    </p>
                                    <div className="mt-auto flex lg:flex-row flex-col w-full gap-x-6 lg:items-center lg:pt-0 pt-12">
                                        <div className="h-16 min-w-[64px] rounded-full relative overflow-hidden">
                                            <Image
                                                src={block.icon}
                                                alt={block.person}
                                                width={64}
                                                style={{
                                                    objectFit: 'cover',
                                                    filter: 'grayscale()',
                                                    borderRadius: 32,
                                                }}
                                            />
                                        </div>
                                        <div className="w-full whitespace-normal">
                                            <div className="text-lg font-bold lg:pt-0 lg:pb-0 pt-4 pb-1">
                                                {block.person}
                                            </div>
                                            <div className="font-light text-white text-opacity-50">
                                                {block.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
