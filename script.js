document.addEventListener("DOMContentLoaded", () => {
    const gabrielMislang = document.querySelector('#gabriel-mislang h1');

    if (gabrielMislang) {
        // Scroll logic for the text moving left and right
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop; // Get current scroll position

            const moveX = scrollTop * -2.4; // Sensitivity for X axis
            // const moveY = scrollTop * -0.15; // Sensitivity for Y axis (parallax effect)
            
            gsap.to(gabrielMislang, {
                x: moveX,
                // y: moveY, // Apply parallax effect on Y axis
                duration: 0.1, // Smooth update for visible responsiveness
                ease: "power4.out", // Smooth easing for consistent animation
                overwrite: "auto", // Prevent overlapping animations
            });
        });
    }   

    // const mainSection = document.querySelector('#main');

    // if (mainSection) {
    //     window.addEventListener('scroll', () => {
    //         const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //         const cropValue = Math.min(scrollTop / 25, 100); // Adjust the divisor to control the cropping speed

    //         mainSection.style.clipPath = `inset(0 0 ${cropValue}% 0)`;
    //     });
    // }

    const typeAnimation = (element, text, callback) => {
        let index = 0;
        const type = () => {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                const delay = Math.random() * 100 + 50; // Random delay between 50ms and 250ms
                setTimeout(type, delay);
            } else if (callback) {
                callback();
            }
        };
        type();
    };

    const descriptionLine1 = document.querySelector('#description_line_1');
    const descriptionLine2 = document.querySelector('#description_line_2');
    const descriptionLine3 = document.querySelector('#description_line_3');

    if (descriptionLine1) {
        descriptionLine1.innerHTML = ''; // Clear existing content
        typeAnimation(descriptionLine1, '$ hello world!', () => {
            if (descriptionLine2) {
                descriptionLine2.innerHTML = ''; // Clear existing content
                typeAnimation(descriptionLine2, "$ i'm gabriel mislang", () => {
                    if (descriptionLine3) {
                        descriptionLine3.innerHTML = ''; // Clear existing content
                        typeAnimation(descriptionLine3, "and i like to learn stuff!");
                    }
                });
            }
        });
    }

    // GSAP ScrollTrigger for animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".navigation-bar", {
        scrollTrigger: {
            trigger: "#main",
            start: "5% 0%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -20, 
        ease: "power1.out",
    });

    gsap.to("#arrow-right-down-line", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 50%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -60,
        ease: "power1.out",
    });
    
    gsap.to("#description_line_1", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 40%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -90,
        ease: "power1.out",
    });

    gsap.to("#description_line_2", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 37%",
            end: "bottom bottom", 
            scrub: 1, 
        },
        y: -90,
        ease: "power1.out",
    });

    gsap.to("#description_line_3", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 34%",
            end: "bottom bottom", 
            scrub: 1, 
        },
        y: -90,
        ease: "power1.out",
    });

    gsap.to("#github-logo", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 28%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -90,
        ease: "power1.out",
    });

    gsap.to("#linkedin-logo", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 23%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -90,
        ease: "power1.out",
    });

    gsap.to("#facebook-logo", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 18%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -90,
        ease: "power1.out",
    })

    gsap.to("#twitter-logo", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 13%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -90,
        ease: "power1.out",
    });

    gsap.to("#youtube-logo", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 8%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -90,
        ease: "power1.out",
    })

    gsap.to("#gmail-logo", {
        scrollTrigger: {
            trigger: "#main",
            start: "70% 3%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -90,
        ease: "power1.out",
    })
});
