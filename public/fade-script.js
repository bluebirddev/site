function fadeScript() {
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
}

fadeScript()
