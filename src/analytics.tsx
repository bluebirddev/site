'use client'

import Script from 'next/script'
import * as gtag from '../gtag.js'

const key = 'G-TGB645J9J0'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const gtag = (window as any).gtag

export const pageview = (url: string) => {
    gtag('config', key, {
        page_path: url,
    })
}

export const event = ({ action, category, label, value }: any) => {
    gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}

export const GoogleAnalytics = () => {
    //You can show in the console the GA_TRACKING_ID to confirm
    console.log(gtag.GA_TRACKING_ID)

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${key}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${key}', {
                      page_path: window.location.pathname,
                      });
                    `,
                }}
            />
        </>
    )
}
