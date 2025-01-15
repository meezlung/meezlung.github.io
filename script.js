document.addEventListener("DOMContentLoaded", () => {
    const gabrielMislang = document.querySelector('#gabriel-mislang h1');

    if (gabrielMislang) {
        // Scroll logic for GSAP
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            // Calculate a consistent movement based on total scroll position
            const moveX = scrollTop * -2.4; // Adjust multiplier for sensitivity and direction
            
            gsap.to(gabrielMislang, {
                x: moveX, // Move based on total scroll position
                duration: 0.1, // Smooth update for visible responsiveness
                ease: "linear", // Smooth easing for consistent animation
                overwrite: "auto", // Prevent overlapping animations
            });
        });
    }

    // GSAP ScrollTrigger for animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".credit", {
        scrollTrigger: {
            trigger: "#main",
            start: "5% 0%", // Trigger when #main is halfway visible
            end: "bottom bottom", // End when #main exits the viewport
            scrub: 1, // Smooth scrolling effect
        },
        y: -20, // Parallax movement upwards
        ease: "power1.out", // Smooth easing for consistent animation        
    });

    gsap.to(".left-navigation-bar", {
        scrollTrigger: {
            trigger: "#main",
            start: "5% 0%", // Trigger when #main is halfway visible
            end: "bottom bottom", // End when #main exits the viewport
            scrub: 1, // Smooth scrolling effect
        },
        y: -20, // Parallax movement upwards
        ease: "power1.out", // Smooth easing for consistent animation
    });

    gsap.to("#job iconify-icon", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 50%", // Trigger when #main is halfway visible
            end: "bottom bottom", // End when #main exits the viewport
            scrub: 1, // Smooth scrolling effect
        },
        y: -60, // Parallax movement upwards
        ease: "power1.out", // Smooth easing for consistent animation
    });

    gsap.to("#student-wants", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 40%", // Trigger when #main is halfway visible
            end: "bottom bottom", // End when #main exits the viewport
            scrub: 1, // Smooth scrolling effect
        },
        y: -90, // Parallax movement upwards
        ease: "power1.out", // Smooth easing for consistent animation
    });

    gsap.to("#software-engineer", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 40%", // Trigger when #main is halfway visible
            end: "bottom bottom", // End when #main exits the viewport
            scrub: 1, // Smooth scrolling effect
        },
        y: -90, // Parallax movement upwards
        ease: "power1.out", // Smooth easing for consistent animation
    });

    gsap.to("#gabriel-mislang", {
        scrollTrigger: {
            trigger: "#main",
            start: "80% 70%", // Trigger when #main is halfway visible
            end: "bottom bottom", // End when #main exits the viewport
            scrub: 1, // Smooth scrolling effect
        },
        y: -50, // Parallax movement upwards
        ease: "power1.out", // Smooth easing for consistent animation
    });

    gsap.to("#main", {
        scrollTrigger: {
            trigger: "#main",
            start: "top top", // Trigger when #main is halfway visible
            end: "bottom bottom", // End when #main exits the viewport
            scrub: 1, // Smooth scrolling effect
            // Debugging markers
            // markers: true, // Disable markers for a cleaner look
        },
        y: 70, // Parallax movement upwards
        ease: "linear", // Smooth easing for consistent animation
    })

});
