const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            el.setAttribute('transition-style', el.dataset.transition);
            el.classList.remove('opacity-0');
            obs.unobserve(el);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('[data-transition]').forEach(el => {
    observer.observe(el);
});
