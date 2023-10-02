function onAppLoad() {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active')
            }
        })
    })

    const slides = document.querySelectorAll('.slide')

    slides.forEach((slide) => {
        observer.observe(slide)
    })
}

onAppLoad()
