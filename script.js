// Reference: IntersectionObserver for scroll animations

const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
}, {
    threshold: 0.25,
    rootMargin: "0px 0px -50% 0px",
})

sections.forEach(section => {
    observer.observe(section)
})