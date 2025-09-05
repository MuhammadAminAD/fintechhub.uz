'use client'

import { styles } from '@/styles/styles'
import gsap from 'gsap'
import React, { useEffect } from 'react'

export default function Partners() {

    useEffect(() => {
        const wraper = document.querySelector(".home-partners-wraper")
        if (wraper) {
            const wraperWidth = wraper.clientWidth;
            gsap.to(".section-partners", {
                scrollTrigger: {
                    trigger: ".section-partners",
                    start: "center center",
                    end: `+=${wraperWidth}`,
                    pin: true,
                }
            })

            gsap.to(".home-partners-wraper", {
                x: wraperWidth * -1,
                delay: 0.5,
                stagger: 700,
                scrollTrigger: {
                    trigger: ".section-partners",
                    start: "center center",
                    end: `+=${wraperWidth}`,
                    toggleActions: "play none none reverse",
                    scrub: true,
                }
            })
        }
    }, [])
    return (
        <section className={`${styles.container} section-partners`}>
            <div className='flex overflow-hidden relative z-1'>
                <div className='py-3 px-4 bg-purple text-6xl text-white'>
                    Hamkorlarimiz

                    <div className='py-3 px-4 bg-purple text-6xl text-white absolute top-0 left-0 z-10'>
                        Hamkorlarimiz
                    </div>
                </div>

                <div className='flex gap-3 home-partners-wraper relative z-0'>
                    {Array(6).fill(null).map((_, index) => <div key={index} className='w-full text-7xl'>MySafar</div>)}
                </div>
            </div>
        </section>
    )
}
