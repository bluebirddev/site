import { WhatWeDo } from './sections/WhatWeDo'
import { OurTechStack } from './sections/OurTechStack'
import { CaseStudies } from './sections/CaseStudies'
import { ClientTestimonials } from './sections/ClientTestimonials'
import { HowItStarted } from './sections/HowItStarted'
import { OurPeople } from './sections/OurPeople'
import { ContactUs } from './sections/ContactUs'
import { Footer } from './sections/Footer'
import { Intro } from './sections/Intro'

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
