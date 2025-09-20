document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navAnchors = document.querySelectorAll('.nav-links a');

    if (!hamburger || !navLinks) return; 

    function setMenu(open) {
        navLinks.classList.toggle('show', open);
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(!!open));
    }

    hamburger.addEventListener('click', () => {
        setMenu(!navLinks.classList.contains('show'));
    });

    // Close menu when a nav link is clicked 
    navAnchors.forEach(a => {
        a.addEventListener('click', () => {

        setTimeout(() => setMenu(false), 100);
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
    });
});
