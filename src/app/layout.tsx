import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Nunito_Sans } from 'next/font/google'
import bg from '../../public/bg.jpeg'
import Image from 'next/image'

const inter = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--body',
})

const sourceSans3 = Nunito_Sans({
    subsets: ['latin'],
    weight: ['300', '500', '700'],
    style: ['italic', 'normal'],
    variable: '--heading',
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${sourceSans3.variable}`}>
            <body
                className={`${inter.className} relative bg-[#0c1534] flex justify-center`}
                style={
                    {
                        // background: 'url(bg.jpeg)',
                        // backgroundColor: '#0e1635',
                        // backgroundPosition: '50% 0',
                        // backgroundRepeat: 'no-repeat',
                    }
                }
            >
                {/* <div className="flex sm:block w-full absolute inset-0"> */}
                <Image
                    src={bg}
                    className="hidden sm:block"
                    alt="Background"
                    style={{
                        position: 'absolute',
                        top: 0,
                        // left: 0,
                        zIndex: -1,
                        // width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: '100% 0%',
                    }}
                />
                {/* </div> */}
                <div className="sm:hidden">
                    <div
                        className="absolute top-0 h-full w-full z-[-1]"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                            to bottom,
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
        </html>
    )
}
