'use client'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { ReactNode, useState } from 'react'
import Image from 'next/image'

function getIndex(index: number, length: number) {
    if (index < 0) return getIndex(length + index, length)
    return index % length
}

export function Carousel({ items }: { items: ReactNode[] }) {
    const middleIndex = Math.floor(items.length / 2)

    const [index, _setIndex] = useState(0)
    const [direction, setDirection] = useState<'left' | 'right' | undefined>(undefined)

    function setIndex(newIndex: number) {
        if (newIndex > index) setDirection('right')
        else if (newIndex < index) setDirection('left')
        _setIndex(newIndex)
    }

    return (
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
                {items.map((item, itemIndex) => {
                    const adjustedItemIndex = getIndex(itemIndex - index, items.length)

                    return (
                        <div
                            key={i}
                            className={clsx('inline-block w-full px-6 absolute top-0 h-full', {
                                'opacity-20': adjustedItemIndex !== middleIndex,
                                'transition-all duration-700':
                                    (adjustedItemIndex > 0 &&
                                        adjustedItemIndex < items.length - 1) ||
                                    (direction === 'left' &&
                                        adjustedItemIndex === items.length - 1) ||
                                    (direction === 'right' && adjustedItemIndex === 0),
                            })}
                            style={{
                                transform: `translateX(calc(${
                                    (adjustedItemIndex - middleIndex) * 100
                                }%))`,
                            }}
                        >
                            <div className="bg-[rgba(14,22,53,.4)] flex flex-col items-center backdrop-blur-md border border-white border-opacity-10 h-full transition duration-700 relative px-10 py-12 lg:px-12 lg:py-16">
                                <div
                                    className={clsx(
                                        'absolute top-[-36px] bg-[#f3883c] h-16 w-16 rounded-full flex items-center justify-center text-[80px] transition duration-700',
                                        {
                                            'opacity-0': adjustedItemIndex !== middleIndex,
                                        },
                                    )}
                                >
                                    <span className="mt-10">“</span>
                                </div>
                                <p className="text-left max-w-full whitespace-normal flex-1 overflow-y-auto">
                                    {item.testimonial}
                                </p>
                                <div className="mt-auto flex lg:flex-row flex-col w-full gap-x-6 lg:items-center lg:pt-0 pt-12">
                                    <div className="h-16 min-w-[64px] rounded-full relative overflow-hidden">
                                        <Image
                                            src={item.icon}
                                            alt={item.person}
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
                                            {item.person}
                                        </div>
                                        <div className="font-light text-white text-opacity-50">
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
