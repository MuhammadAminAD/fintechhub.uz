'use client'

import { shortlyAboutGsap } from '@/animations/gsap';
import { styles } from '@/styles/styles'
import React, { useEffect, useRef } from 'react'


export default function ShortlyAbout() {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (headingRef.current) {
            shortlyAboutGsap(headingRef as React.RefObject<HTMLHeadingElement>);
        }
    }, []);

    return (
        <section>
            <div className={`${styles.container} py-8 lg:py-20 lg:flex max-lg:flex-col items-center gap-20`}>
                <div className='mb-2.5 lg:mb-0'>
                    <h3 className={`mb-4 ${styles.tagline}`}>Fintechhub</h3>
                    <h2 ref={headingRef} className={`shortly-about-heading lg:w-[420px] ${styles.title}`}>
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
