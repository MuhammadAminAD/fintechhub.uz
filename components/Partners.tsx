'use client'

import { partnersGsap } from '@/animations/gsap'
import { partnersData } from '@/constants/constants'
import { styles } from '@/styles/styles'
import { Sriracha } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function Partners() {

    useEffect(() => {
        partnersGsap()
    }, [])
    return (
        <section className={`section-partners  bg-purple py-16`}>
            <div className='flex overflow-hidden relative z-1'>
                <div className='py-3 px-4 bg-purple text-6xl text-white'>
                    Hamkorlarimiz

                    <div className='py-3 px-4 bg-purple text-6xl text-white absolute top-0 left-0 z-10 h-full'>
                        Hamkorlarimiz
                    </div>
                </div>

                <div className='flex gap-5 items-center home-partners-wraper relative z-0'>
                    {partnersData.map((logo, index) =>
                        <div key={index} className='text-7xl shrink-0 basis-[40%] object-cover'>
                            <Image src={logo.src} width={logo.width} height={logo.height} alt="logo" />
                        </div>)}
                </div>
            </div>
        </section>
    )
}
