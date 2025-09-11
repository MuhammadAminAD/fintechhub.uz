// road map 
// 10 - 20 headerGsap

import { partnersData } from "@/constants/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

// =================== HEADER ===================
export const headerGsap = () => {
    const splittedHeading = new SplitText(".header-heading-text", { type: "words, chars" });

    const timeline = gsap.timeline();
    timeline.from(splittedHeading.chars, {
        y: 50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "back.out(1.7)",
    });

    return () => splittedHeading.revert();
};

// =================== SHORTLY ABOUT ===================
export const shortlyAboutGsap = (headingRef: React.RefObject<HTMLHeadingElement>) => {
    const mm = gsap.matchMedia();
    if (!headingRef.current) return;

    const splittedHeading = new SplitText(headingRef.current, { type: "words, chars" });
    const shortlyAboutDescription = new SplitText(
        document.querySelector(".shortly-about-description"),
        { type: "words, chars" }
    );

    mm.add("(min-width:1024px)", () => {
        gsap.from(splittedHeading.chars, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        gsap.from(shortlyAboutDescription.chars, {
            opacity: 0,
            scale: 0,
            y: -10,
            duration: 0.1,
            stagger: 0.005,
            ease: "power4.out",
            scrollTrigger: {
                trigger: shortlyAboutDescription.chars[0],
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    });

    return () => {
        splittedHeading.revert();
        shortlyAboutDescription.revert();
        mm.revert();
    };
};

// =================== IMAGES ===================
export const imagesGsap = () => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
        const images = gsap.utils.toArray<HTMLImageElement>(".images-img");

        mm.add("(min-width:1024px)", () => {
            gsap.from(images, {
                y: 400,
                opacity: 0,
                scale: 0,
                stagger: 2,
                duration: 10,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: images[0],
                    start: "top 90%",
                    end: "bottom -30%",
                    toggleActions: "play none none reverse",
                    scrub: true,
                },
            });

            ScrollTrigger.create({
                trigger: ".images-section",
                pin: true,
                start: "top 10%",
                end: "+=1400",
            });
        });
    });

    return () => {
        ctx.revert();
        mm.revert();
    };
};

// =================== VIDEO ===================
export const videoGsap = () => {
    const title = document.querySelector(".home-video-title");
    const desc = document.querySelector(".home-video-description");

    if (!title || !desc) return;

    const splittedHeading = new SplitText(title, { type: "words, chars" });
    const shortlyAboutDescription = new SplitText(desc, { type: "words, chars" });
    const mm = gsap.matchMedia();

    mm.add("(min-width:1024px)", () => {
        gsap.from(splittedHeading.chars, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        gsap.from(shortlyAboutDescription.chars, {
            opacity: 0,
            scale: 0,
            y: -10,
            duration: 0.1,
            stagger: 0.005,
            ease: "power4.out",
            scrollTrigger: {
                trigger: shortlyAboutDescription.chars[0],
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    });

    return () => {
        splittedHeading.revert();
        shortlyAboutDescription.revert();
        mm.revert();
    };
};

// =================== PARTNERS ===================
export const partnersGsap = () => {
    const mm = gsap.matchMedia();
    const wrapper = document.querySelector(".home-partners-wraper");

    mm.add("(min-width:1024px)", () => {
        if (wrapper) {
            const totalWidth = Array.from(wrapper.children).reduce(
                (sum, el) => sum + (el as HTMLElement).offsetWidth + 80,
                0
            );

            // Pin section
            gsap.to(".section-partners", {
                scrollTrigger: {
                    trigger: ".section-partners",
                    start: "center center",
                    end: `+=${totalWidth}`,
                    pin: true,
                    scrub: false,
                },
            });

            // Horizontal scroll
            gsap.to(".home-partners-wraper", {
                x: -totalWidth + window.innerWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: ".section-partners",
                    start: "center center",
                    end: `+=${totalWidth}`,
                    scrub: true,
                },
            });
        }
    });

    return () => mm.revert();
};

// =================== COURSES ===================
export const coursesGsap = () => {
    const texts = document.querySelectorAll(".animated-text");
    const mm = gsap.matchMedia();
    const colors = ["#ff0055", "#00ffcc", "#ffaa00", "#00aaff", "#ff66ff"];

    mm.add("(min-width:1024px)", () => {
        // Animated text
        texts.forEach((text) => {
            const split = new SplitText(text, { type: "chars, words" });
            const tl = gsap.timeline({ repeat: -1, yoyo: true });

            split.chars.forEach((char) => {
                (char as HTMLElement).style.display = "inline-block";
                (char as HTMLElement).style.whiteSpace = "pre";
            });

            tl.fromTo(
                split.chars,
                { y: 10 },
                {
                    y: 0,
                    stagger: 0.05,
                    duration: 0.4,
                    repeat: -1,
                    yoyo: true,
                    ease: "back.out(2)",
                }
            );
        });

        // Pinning the main title
        const titleHeight = (document.querySelector(".home-main-title") as HTMLElement)?.offsetHeight || 0;
        const courseHeight = (document.querySelector(".home-main-courses") as HTMLElement)?.offsetHeight || 0;

        if (titleHeight && courseHeight) {
            gsap.to(".home-main-title", {
                scrollTrigger: {
                    trigger: ".home-main-title",
                    start: "center center",
                    end: `+=${courseHeight - titleHeight}`,
                    pin: true,
                    scrub: true,
                },
            });
        }

        // Animate heading
        const headingSplit = new SplitText(".home-main-heading", { type: "words, chars" });

        gsap.from(headingSplit.chars, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: ".home-main-courses",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    });

    return () => mm.revert();
};
