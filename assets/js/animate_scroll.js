const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('slide-in-trigger')) {
                entry.target.classList.add('slide-in');
            } else if (entry.target.classList.contains('blur-in-trigger')) {
                entry.target.classList.add('blur-in');
            }
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
    observer.observe(element);
});