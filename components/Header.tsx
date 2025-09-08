"use client";
import { headerGsap } from '@/animations/gsap';
import { styles } from '@/styles/styles'
import React, { useEffect } from 'react'


export default function Header() {
    // text animation
    useEffect(() => {
        headerGsap()
    }, []);


    return (
        <header className='home-header lg:py-26 py-20'>
            <div className={`${styles.container}`}>
                <h1 className='font-unbounded text-3xl lg:text-6xl leading-[100%] tracking-[-1.2%] uppercase max-w-[874px] font-extrabold header-heading-text'>Dasturlashga ilk qadam shu yerdan <span className='text-purple'>Boshlanadi</span></h1>
                <p className='header-paragraph-text text-[20px] leading-[150%] py-[10px] font-nunito-sans'>IT kurslari bo'yicha O'zbekistondagi yirik laboratoriyaga xush kelibsiz!</p>
                <button className={`${styles.redBtn}`}>Bog'lanish</button>
            </div>
        </header>
    )
}
