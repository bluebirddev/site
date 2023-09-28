import Image from 'next/image'
import contact from '../../public/contact.jpg'

export function ContactUs() {
    return (
        <div className="mt-24 lg:mt-48 container backdrop-blur-md bg-[rgba(14,22,53,.4)] border border-white border-opacity-10 flex flex-col-reverse lg:flex-row items-stretch">
            <div className="lg:w-3/5 flex flex-col items-start p-6 lg:p-14">
                <h3 className="pill-heading">Contact Us</h3>
                <h2 className="heading-2 pt-5">Get in touch today</h2>
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-8 w-full pt-8">
                    <input placeholder="Full name" />
                    <input placeholder="Email Address" />
                    <input placeholder="+1 932 123 123" />
                    <input placeholder="Company (Optional)" />
                    <textarea
                        placeholder="Type your message here"
                        rows={3}
                        className="col-span-2"
                    />
                    <div className="pt-4">
                        <button className="primary">Get in Touch</button>
                    </div>
                </form>
            </div>
            <div className="lg:flex-1 h-[250px] lg:h-auto relative">
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
    )
}
