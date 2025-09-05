'use client'
import { styles } from '@/styles/styles'
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useEffect } from 'react'

export default function Video() {
    useEffect(() => {
        const splittedHeading = new SplitText(document.querySelector(".home-video-title"), { type: "words, chars" });
        const shortlyAboutDescription = new SplitText(document.querySelector('.home-video-description'), { type: "words, chars" });

        gsap.from(splittedHeading.chars, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "back.out(1.5)",
            scrollTrigger: {
                trigger: ".home-video-title",
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
                trigger: shortlyAboutDescription.chars,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
        return () => {
            splittedHeading.revert();
            shortlyAboutDescription.revert();
            ScrollTrigger.killAll();
        }
    }, []);
    return (
        <section className={`${styles.container} flex py-20 items-center gap-20 home-video`}>
            <h2 className={`${styles.title} max-w-[680px] home-video-title`}>
                FINTECHHUB - <span className='text-purple'>professional</span> dasturchi bo’lib chiqishingizni <span className='text-purple'>kafolatlaydi!</span>
            </h2>
            <div>
                <p className='text-[20px] leading-[150%] mb-8 home-video-description'>Buni quyidagi 10 daqiqalik videoni ko'rsangiz tushunib olasiz.</p>

                <iframe className='home-video-vd' src="https://www.youtube.com/embed/jD6IDd6i86M?si=2gdcOemLbB7YOKV_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
        </section>
    )
}
