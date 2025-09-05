"use client";
import { styles } from '@/styles/styles'
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useEffect } from 'react'
gsap.registerPlugin(SplitText)

export default function Header() {
    useEffect(() => {
        const timeline = gsap.timeline()
        const splittedHeading = new SplitText(".header-heading-text", { type: "words, chars" });
        timeline.from(splittedHeading.chars, {
            y: 50,
            opacity: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "back.out(1.7)",
        });
    }, []);
    return (
        <header className='home-header py-26'>
            <div className={`${styles.container}`}>
                <h1 className='font-unbounded text-6xl leading-[100%] tracking-[-1.2%] uppercase max-w-[874px] font-extrabold header-heading-text'>Dasturlashga ilk qadam shu yerdan <span className='text-purple'>Boshlanadi</span></h1>
                <p className='header-paragraph-text text-[20px] leading-[150%] py-[10px] font-nunito-sans'>IT kurslari bo'yicha O'zbekistondagi yirik laboratoriyaga xush kelibsiz!</p>
                <button className={`${styles.redBtn}`}>Bog'lanish</button>
            </div>
        </header>
    )
}
