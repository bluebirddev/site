import Image from 'next/image'
import logo from '../../public/logo.svg'
import email from '../../public/footer/email.svg'
import location from '../../public/footer/location.svg'

export function Footer() {
    return (
        <footer className="container py-20">
            <div className="flex flex-col lg:grid grid-cols-5 gap-[70px] pb-16">
                <div className="col-span-2 space-y-6">
                    <Image src={logo} alt="logo" width={210} />
                    <h5 className="text-xl max-w-xs">
                        Building Innovative Software with Style and Simplicity
                    </h5>
                </div>
                <div className="col-span-1">
                    <h5 className="text-2xl">Quick Links</h5>
                    <ul className="font-medium  space-y-8 mt-8">
                        <li className="hover:text-opacity-100 text-white text-opacity-60">
                            What We Do
                        </li>
                        <li className="hover:text-opacity-100 text-white text-opacity-60">
                            Project Showcase
                        </li>
                        <li className="hover:text-opacity-100 text-white text-opacity-60">
                            Our Peopl
                        </li>
                    </ul>
                </div>
                <div className="col-span-2">
                    <h5 className="text-2xl">Contact Us</h5>
                    <ol className="text-white text-sm space-y-4 mt-8">
                        <li className="flex border border-white border-opacity-10 px-5 py-4 space-x-4">
                            <Image src={email} alt="email" />
                            <div>
                                <div className="text-opacity-60 text-white mb-1">Email</div>
                                <div>info@bluebird.dev</div>
                            </div>
                        </li>
                        <li className="flex border border-white border-opacity-10 px-5 py-4 space-x-4">
                            <Image
                                src={location}
                                alt="location"
                                style={{
                                    height: 'auto',
                                }}
                            />
                            <div>
                                <div className="text-opacity-60 text-white mb-1">
                                    Address - South Africa
                                </div>
                                <div>
                                    Cedarwood House, Ballywoods Office Park, 33 Ballyclare Drive,
                                    Bryanston Johannesburb, 2191
                                </div>
                            </div>
                        </li>
                        <li className="flex border border-white border-opacity-10 px-5 py-4 space-x-4">
                            <Image
                                src={location}
                                alt="location"
                                style={{
                                    height: 'auto',
                                }}
                            />
                            <div>
                                <div className="text-opacity-60 text-white mb-1">
                                    Address - South Africa
                                </div>
                                <div>
                                    Cedarwood House, Ballywoods Office Park, 33 Ballyclare Drive,
                                    Bryanston Johannesburb, 2191
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
            <div className="py-8 border-t border-t-white border-opacity-20">
                Copyright © Bluebird Technologies 2023 | All rights reserved
            </div>
        </footer>
    )
}
