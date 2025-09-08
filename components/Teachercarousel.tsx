"use client";

import { teachersData } from '@/constants/constants'
import { styles } from '@/styles/styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Teachercarousel() {
    const carouselRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const carousel = carouselRef.current
        if (!carousel) return

        const cards = carousel.querySelectorAll(".teacher-card-carousel")
        const gap = 22 // gap-x-5.5 ≈ 22px
        const totalWidth = Array.from(cards).reduce((acc, card) => acc + card.clientWidth + gap, 0)

        // Horizontal scroll uchun asosiy animatsiya
        const horizontalAnim = gsap.to(carousel, {
            x: -(totalWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                id: "carouselAnim", // set the id for the ScrollTrigger
                trigger: carousel,
                start: "center center",
                end: `+=${totalWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        // Kartalarga alohida fade-in animatsiya
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { opacity: 0.2, scale: 0.9, y: 10 },
                {
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        containerAnimation: horizontalAnim, // pass the animation instance
                        start: "left center",
                        end: "center center",
                        scrub: true,
                    },
                }
            )
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <section className={`${styles.container} overflow-hidden mt-70 lg:hidden`}>
            <div
                ref={carouselRef}
                className='flex gap-x-5.5 teacher-carousel'
            >
                {teachersData.map(({ id, name, photo, job }) => (
                    <div
                        key={id}
                        className='teacher-card-carousel relative w-[70%] basis-[70%] shrink-0'
                    >
                        <Image
                            src={photo.src}
                            width={photo.width}
                            height={photo.height}
                            alt={`fintechhub teachers ${name}`}
                            className='w-full h-full rounded-2xl'
                        />

                        <div className='w-4/5 mx-auto absolute bottom-6 left-1/2 -translate-x-1/2 transform-3d translate-z-5'>
                            <h4 className='text-xl font-semibold'>{name}</h4>
                            <p className='text-gray-400'>{job}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
