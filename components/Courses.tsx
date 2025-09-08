'use client'

import { coursesGsap } from '@/animations/gsap';
import { CoursesData } from '@/constants/constants';
import { styles } from '@/styles/styles';
import React, { useEffect } from 'react'

export default function Courses() {

    useEffect(() => {
        coursesGsap()
    }, []);

    return (
        <main className={`${styles.container} lg:flex py-8 lg:py-20 justify-between gap-20`}>
            <div className='max-w-90'>
                <div className=' home-main-title h-fit'>
                    <h3 className={`${styles.tagline}`}>Fintechhub</h3>
                    <h2 className={`${styles.title} mt-4 mb-8 home-main-heading`}>Hozir qaysi kurslar trendda? <span className='text-purple'>ularni bizdan topasiz!</span></h2>
                    <button className={`${styles.redBtn}`}>Bog’lanish</button>
                </div>

            </div>
            <div className='grid md:grid-cols-2 w-full gap-y-6 lg:gap-y-16 gap-x-12 justify-between home-main-courses max-lg:mt-12'>
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

                            <p className='font-nunito-sans text-lg underline text-blue-400'>Batafsil ko’rish→</p>
                        </div>
                    );
                })}
            </div>
        </main>
    )
}
