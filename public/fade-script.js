function createIntersectionObserver() {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
            }
        })
    })

    const slides = document.querySelectorAll('.fade')

    slides.forEach((fade) => {
        observer.observe(fade)
    })

    return observer
}

function fadeScript() {
    let observer = createIntersectionObserver()

    let previousUrl = ''
    const observer2 = new MutationObserver(function () {
        if (location.href !== previousUrl) {
            previousUrl = location.href
            observer.disconnect()
            observer = createIntersectionObserver()
        }
    })

    const $body = document.querySelector('body')
    observer2.observe($body, {
        childList: true,
        subtree: true,
    })
}

fadeScript()
