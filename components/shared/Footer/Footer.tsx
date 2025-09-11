import Logo from '@/components/Icons/Logo'
import { CoursesData } from '@/constants/constants'
import { styles } from '@/styles/styles'
import React from 'react'

export default function Footer() {
    return (
        <footer className={`${styles.container} flex justify-between pb-8`}>
            <div>
                <Logo />
                <a href="tel:+998712038800" className='py-2.5 px-4.25 rounded-[6px] border border-zinc-900 block mt-2.5'>
                    71 203 88 00
                </a>
            </div>

            <div className='flex justify-between gap-16 text-right'>
                <div>
                    <p className='text-md font-extrabold font-nunito leading-[1.5] mb-1.25'>Bolimlar:</p>
                    <ul className='flex flex-col gap-1.25'>
                        <li>Biz haqimizda</li>
                        <li>Rasimlar</li>
                        <li>Aloqa</li>
                        <li>Ko’p Berilgan Savollar</li>
                        <li>Ustozlarimiz</li>
                    </ul>
                </div>

                <div>
                    <p className='text-md font-extrabold font-nunito leading-[1.5] mb-1.25'>Kurslarimiz:</p>
                    <ul className='flex flex-col gap-1.25'>
                        {CoursesData.map((course, index) => <li key={index}>{course.name}</li>)}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
