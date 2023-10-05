import Image from 'next/image'
import contact from '@/images/contact-calculator.jpg'
import { FormEvent, useState } from 'react'
import check from '@/images/check.svg'

export function ContactUs() {
    const [isSuccess, setIsSuccess] = useState(false)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsSuccess(true)
    }

    return (
        <section id="contact-us" className="pt-24 lg:pt-32 container">
            <div className="card flex flex-col-reverse lg:flex-row items-stretch">
                <div className="lg:w-3/5 flex flex-col items-start p-6 lg:p-14">
                    <h3 className="pill-heading fade fade-left mb-8">Quote Calculator Form</h3>
                    {!isSuccess ? (
                        <form
                            className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 w-full fade fade-left"
                            onSubmit={onSubmit}
                        >
                            <input placeholder="Full name" />
                            <input placeholder="Email Address" />
                            <input placeholder="+1 932 123 123" />
                            <input placeholder="Company (Optional)" />
                            <div className="pt-4">
                                <button className="btn-primary">Let’s send you a quote</button>
                            </div>
                        </form>
                    ) : (
                        <div className="border border-white border-opacity-20 p-7 flex space-x-5 bg-white bg-opacity-5">
                            <Image src={check} alt="check" />
                            <div className="space-y-1">
                                <div className="text-lg font-bold">Thank you</div>
                                <p className="text-sm">
                                    Thanks for reaching out. We will get back to you soon.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="lg:flex-1 lg:h-auto relative fade fade-right h-64">
                    <Image
                        src={contact}
                        alt="contact"
                        sizes="100%"
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
