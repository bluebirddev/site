import Image from 'next/image'

import cj from '../../public/who-we-are/cj.jpg'
import rikus from '../../public/who-we-are/rikus.jpg'
import wester from '../../public/who-we-are/wester.jpg'
import nick from '../../public/who-we-are/nick.jpg'

const blocks = [
    {
        person: 'CJ Visser',
        image: cj,
        title: 'Founder & CEO',
        description:
            'CJ, an entrepreneurial software engineer, drives our team towards sustainable solutions and positive environments, fostering innovative horizons and driving continuous growth in AI technology across various industries.',
    },
    {
        person: 'Rikus Louw',
        image: rikus,
        title: 'Chief Architect',
        description:
            'A seasoned financial software architect, Rikus engineers stability from complexity. Guiding projects with a wealth of experience, he mentors aspiring developers, ensuring compliance, security, and unmatched performance.',
    },
    {
        person: 'Wester Visser',
        image: wester,
        title: 'COO',
        description:
            "With a foundation as a qualified Industrial Engineer, Wester's expertise is the cornerstone of our operational finesse. He seamlessly navigates internal dynamics and external partnerships, ensuring smooth, synergistic success.",
    },
    {
        person: 'Nicholas Zaverdinos',
        image: nick,
        title: 'CTO',
        description:
            'A nomadic explorer fueled by tech and coffee, Nick propels us forward. Leading the charge into new horizons, his passion for cutting-edge solutions and cryptocurrency expertise keeps us at the forefront of innovation.',
    },
]

export function OurPeople() {
    return (
        <div
            className="container w-full max-w-full flex flex-col items-center overflow-hidden pt-32 lg:pt-48"
            id="people"
        >
            <div className="space-y-8 flex flex-col items-center pb-12 lg:pb-24">
                <h3 className="pill-heading">Our People</h3>
                <h2 className="heading-2">The minds behind Bluebird</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {blocks.map((block) => (
                    <div
                        key={block.person}
                        className="h-[620px] backdrop-blur-md bg-[rgba(14,22,53,.4)] border border-white border-opacity-10"
                    >
                        <div className="h-[300px] md:h-[250px] relative">
                            <Image
                                src={block.image}
                                alt={block.person}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                        <div className="px-6 pt-5 pb-10">
                            <h4 className="text-xl font-bold">{block.person}</h4>
                            <p className="pt-4 pb-8">{block.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
