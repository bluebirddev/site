import { WhatWeDo } from './_sections/WhatWeDo'
import { OurTechStack } from './_sections/OurTechStack'
import { CaseStudies } from './_sections/CaseStudies'
import { ClientTestimonials } from './_sections/ClientTestimonials'
import { HowItStarted } from './_sections/HowItStarted'
import { OurPeople } from './_sections/OurPeople'
import { ContactUs } from './_sections/ContactUs'
import { Footer } from './_sections/Footer'
import { Intro } from './_sections/Intro'

import { Header } from './Header'

export default function Home() {
    return (
        <main className="flex flex-col items-center w-full">
            <Header />
            <Intro />
            <WhatWeDo />
            <OurTechStack />
            <CaseStudies />
            <ClientTestimonials />
            <HowItStarted />
            <OurPeople />
            <ContactUs />
            <Footer />
        </main>
    )
}
