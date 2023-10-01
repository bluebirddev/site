function onAppLoad() {
    console.log('asdf')
    const body = document.querySelector('body')
    console.log({ body })
    body?.classList.remove('no-js')
    const observer = new IntersectionObserver(function (entries) {
        console.log('An intersection happened!')
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
            }
        })
    })

    const slides = document.querySelectorAll('.slide')
    console.log({ slides })

    slides.forEach((slide) => {
        observer.observe(slide)
    })
}
console.log('bbasdf')
onAppLoad()
