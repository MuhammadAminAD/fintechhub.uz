'use client'

import { styles } from '@/styles/styles'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function ShortlyAbout() {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!headingRef.current) return;
        const timeline = gsap.timeline();
        const splittedHeading = new SplitText(headingRef.current, { type: "words, chars" });
        const shortlyAboutDescription = new SplitText(document.querySelector('.shortly-about-description'), { type: "words, chars" });

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
        <section>
            <div className={`${styles.container} py-20 flex items-center gap-20`}>
                <div>
                    <h3 className={`mb-4 ${styles.tagline}`}>Fintechhub</h3>
                    <h2 ref={headingRef} className={`shortly-about-heading w-[420px] ${styles.title}`}>
                        IT labaratoriyamiz haqida <span className='text-purple'>qisqacha</span>
                    </h2>
                </div>

                <p className='shortly-about-description overflow-hidden'>
                    FintechHub kompyuter dasturlari va startap loyihalarni ishlab chiqaradigan yurtimizdagi yirik IT laboratoriya hisoblanadi.
                    Dunyo darajasidagi raqamli loyihalarni amaliyotga tadbiq etish bilan birga, o‘z sohasida kuchli bo‘lgan dasturchilarni tayyorlash bilan ham shug‘ullanadi.
                    E’tiborni tortadigan va taassurot uyg‘otadigan interfeyslarni yaratishga qaratilgan Front End kurslarimiz sizga ma’qul keladi.
                    Server tarafda ishlaydigan va amalda eng muhim vazifalarni bajarishga ixtisoslashgan Back End dasturlash kurslarimiz bo‘lsa alohida dunyo.
                    Hech narsani bilmasdan turib, ekspert darajasiga yetishish muammo emas.
                    Buning uchun bizda hamma shart-sharoitlar bor. Poytaxtimiz markazidagi shinam ofis, o‘rganish uchun barcha kerakli jihozlar, yuqori tezlikdagi Wi-Fi, nihoyat o‘z ishining ustasi bo‘lgan o‘qituvchilar sizga ko‘mak berishadi.
                </p>
            </div>
        </section>
    )
}
