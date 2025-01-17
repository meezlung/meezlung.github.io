document.addEventListener("DOMContentLoaded", () => {
    const gabrielMislang = document.querySelector('#gabriel-mislang h1');

    if (gabrielMislang) {
        // Scroll logic for the text moving left and right
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop; // Get current scroll position

            const moveX = scrollTop * -2.4; // Sensitivity
            
            gsap.to(gabrielMislang, {
                x: moveX, 
                duration: 0.1, // Smooth update for visible responsiveness
                ease: "power4.out", // Smooth easing for consistent animation
                overwrite: "auto", // Prevent overlapping animations
            });
        });
    }

    // GSAP ScrollTrigger for animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".credit", {
        scrollTrigger: {
            trigger: "#main",
            start: "5% 0%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -20,
        ease: "power1.out",      
    });

    gsap.to(".left-navigation-bar", {
        scrollTrigger: {
            trigger: "#main",
            start: "5% 0%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -20, 
        ease: "power1.out",
    });

    gsap.to("#job iconify-icon", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 50%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -60,
        ease: "power1.out",
    });

    gsap.to("#student-wants", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 40%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -90,
        ease: "power1.out",
    });

    gsap.to("#software-engineer", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 40%",
            end: "bottom bottom", 
            scrub: 1, 
        },
        y: -90,
        ease: "power1.out",
    });

    gsap.to("#gabriel-mislang", {
        scrollTrigger: {
            trigger: "#main",
            start: "80% 70%",
            end: "bottom bottom",
            scrub: 1, 
        },
        y: -50,
        ease: "power1.out",
    });

    gsap.to("#main", {
        scrollTrigger: {
            trigger: "#main",
            start: "top top", 
            end: "bottom bottom",
            scrub: 1, 
            // Debugging markers
            // markers: true, // Disable markers for a cleaner look
        },
        y: 70, 
        ease: "linear", 
    })

});
