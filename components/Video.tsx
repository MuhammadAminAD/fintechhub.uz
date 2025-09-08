'use client'
import { videoGsap } from '@/animations/gsap';
import { styles } from '@/styles/styles'
import React, { useEffect } from 'react'

export default function Video() {
    useEffect(() => {
        videoGsap()
    }, []);
    return (
        <section className={`${styles.container} lg:flex py-8 lg:py-20 items-center gap-20 home-video`}>
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
