'use client'

import { partnersGsap } from '@/animations/gsap'
import { styles } from '@/styles/styles'
import React, { useEffect } from 'react'

export default function Partners() {

    useEffect(() => {
        partnersGsap()
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
