import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Nunito_Sans } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'

import bg from '@/images/bg.jpeg'

const bodyFont = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--body',
})

const headingFont = Nunito_Sans({
    subsets: ['latin'],
    weight: ['300', '500', '700'],
    style: ['italic', 'normal'],
    variable: '--heading',
})

const description =
    'Bluebird Development provides exclusive consulting, development, and design resources for you and your team.'

const title = 'Bluebird - Home'

export const metadata: Metadata = {
    title,
    description,
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
    twitter: {
        title,
        description,
        card: 'summary_large_image',
    },
    openGraph: {
        title,
        description,
        type: 'website',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // Injects the variables in the <html> tag, so that they can be used in CSS, as in `var(--body)`
        <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
            <body className="relative bg-primary flex justify-center">
                {/* Use background image overlay for desktop */}
                <Image
                    src={bg}
                    className="hidden sm:block"
                    alt="Background"
                    quality={90}
                    style={{
                        position: 'absolute',
                        top: 0,
                        zIndex: -1,
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: '50% 0%',
                    }}
                />

                {/* Don't use overlay image for mobile, since the quality of a low size image is noticable. Rather use a custom gradient background. */}
                <div className="sm:hidden">
                    <div
                        className="absolute top-0 h-full w-full z-[-1]"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                            165deg,
                            rgb(13,22,53),
                            rgb(13,22,53),
                            rgb(20,108,232),
                            rgb(18,38,111),
                            rgb(24,41,133),
                            rgb(13,22,53) 4000px
                          )`,
                        }}
                    ></div>
                </div>
                {children}
            </body>

            {/* Fade script */}
            <Script src="./fade-script.js" />
        </html>
    )
}
