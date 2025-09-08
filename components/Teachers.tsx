"use client"

import { teachersCardTitl } from '@/animations/tilt';
import { teachersData } from '@/constants/constants'
import { styles } from '@/styles/styles'
import Image from 'next/image';
import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';

export default function Teachers() {

    useEffect(() => {
        const cards = document.getElementsByClassName("teacher-card");
        if (cards.length) {
            Array.from(cards).forEach((card) => {
                teachersCardTitl(card as HTMLElement)
            });
        }
    }, []);
    return (
        <section className={`${styles.container} hidden lg:flex `}>
            <div className='max-w-[550px]'>
                <h4 className={`${styles.tagline}`}>Fintechhub</h4>
                <h3 className={`${styles.title}`}>Bizning <span className='text-purple'>ustozlarimiz</span></h3>
            </div>

            <div className='grid lg:grid-cols-4 gap-x-5.5 gap-y-15 w-full'>
                {teachersData.map(({ id, name, photo, job }) =>
                    <div className='teacher-card relative' key={id}>
                        <Image src={photo.src} width={photo.width} height={photo.height} alt={`fintechhub techers ${name}`} className='w-full h-full' />

                        <div className='w-4/5 mx-auto absolute bottom-6 left-1/2 -translate-x-1/2 transform-3d translate-z-5'>
                            <h4>{name}</h4>
                            <p>{job}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
