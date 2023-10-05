import { WhatWeDo } from './_sections/WhatWeDo'
import { OurTechStack } from './_sections/OurTechStack'
import { CaseStudies } from './_sections/CaseStudies'
import { ClientTestimonials } from './_sections/ClientTestimonials'
import { HowItStarted } from './_sections/HowItStarted'
import { OurPeople } from './_sections/OurPeople'
import { ContactUs } from './_sections/ContactUs'
import { Intro } from './_sections/Intro'

export default function HomePage() {
    return (
        <>
            <Intro />
            <WhatWeDo />
            <OurTechStack />
            <CaseStudies />
            <ClientTestimonials />
            <HowItStarted />
            <OurPeople />
            <ContactUs />
        </>
    )
}
