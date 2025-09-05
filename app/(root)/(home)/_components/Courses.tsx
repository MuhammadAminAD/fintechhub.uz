'use client'

import { CoursesData } from '@/constants/constants';
import { styles } from '@/styles/styles';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useEffect } from 'react'

export default function Courses() {
    useEffect(() => {
        const texts = document.querySelectorAll(".animated-text");

        const colors = ["#ff0055", "#00ffcc", "#ffaa00", "#00aaff", "#ff66ff"];
        texts.forEach((text, index) => {
            const split = new SplitText(text, { type: "chars , words" });
            const tl = gsap.timeline({ repeat: -1, yoyo: true });
            split.chars.forEach((char) => {
                (char as HTMLElement).style.display = "inline-block";
                (char as HTMLElement).style.whiteSpace = "pre"; // so'zlarni bo'lmaslik uchun
            });

            tl.fromTo(split.chars, {
                y: 10,
            }, {
                y: 0,
                stagger: 0.05,
                duration: 0.4,
                repeat: -1,
                yoyo: true,
                ease: "back.out(2)"
            })
        });

        const titleHeight = (document.querySelector(".home-main-title") as HTMLElement | null)?.offsetHeight;
        const courseHeight = (document.querySelector(".home-main-courses") as HTMLElement | null)?.offsetHeight;
        console.log(titleHeight + " " + courseHeight)
        if (titleHeight && courseHeight) {
            gsap.to(".home-main-title", {
                scrollTrigger: {
                    trigger: ".home-main-title",
                    start: "center center ",
                    end: `+=${courseHeight - titleHeight}`,
                    pin: true,
                    scrub: true,
                    markers: true
                }
            })
        }

        const headingSplit = new SplitText(".home-main-heading", { type: "words , chars" })

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
    }, []);

    return (
        <main className={`${styles.container} flex py-20 justify-between gap-20`}>
            <div className='max-w-90'>
                <div className=' home-main-title h-fit'>
                    <h3 className={`${styles.tagline}`}>Fintechhub</h3>
                    <h2 className={`${styles.title} mt-4 mb-8 home-main-heading`}>Hozir qaysi kurslar trendda? <span className='text-purple'>ularni bizdan topasiz!</span></h2>
                    <button className={`${styles.redBtn}`}>Bog’lanish</button>
                </div>

            </div>
            <div className='grid  grid-cols-2 w-full gap-y-16 gap-x-12 justify-between home-main-courses'>
                {CoursesData.map(({ id, Icon, title, span }) => {
                    const parts = title.split(new RegExp(`(${span})`, "gi"));

                    return (
                        <div key={id} className="max-w-[386px]">
                            <img src={Icon.src} alt="icon" className="w-12 h-12" />
                            <h4 className="text-white  font-unbounded font-bold leading-[100%] text-[22px] xl:text-[40px] tracking-[-1%] my-6 uppercase">
                                {parts.map((part, index) =>
                                    part.toLowerCase() === span.toLowerCase()
                                        ? <span key={index} className="!text-purple animated-text overflow-hidden">{part}</span>
                                        : <span key={index}>{part}</span>

                                )}
                            </h4>
                        </div>
                    );
                })}
            </div>
        </main>
    )
}
