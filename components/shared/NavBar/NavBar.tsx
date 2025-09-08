'use client'

import Logo from '@/components/Icons/Logo'
import { styles } from '@/styles/styles'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'

export default function NavBar() {
    const [prevY, setPrevY] = useState<number>(0)
    const [nav, setNav] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (prevY > window.scrollY || window.scrollY < 75) {
                setNav(true)
            } else {
                setNav(false)
            }

            setPrevY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [prevY])
    return (
        <nav className='fixed w-full bg-black z-8 top-0 left-0 overflow-hidden duration-700' style={{ maxHeight: nav ? 100 : 0 }}>
            <div className={`${styles.container} flex items-center justify-between py-4 `}>
                <Logo />

                <Menu />
                <div className='gap-[5px] hidden lg:flex'>
                    <div className="flex gap-[5px]">
                        <button className={`${styles.subtle_medium} py-[10px] px-[17px] border border-zinc-900 rounded-[6px]`}>uz</button>
                        <button className={`${styles.subtle_medium} py-[10px] px-[17px] border border-zinc-900 rounded-[6px]`}>ru</button>
                    </div>

                    <a href="" className={`${styles.subtle_medium} py-[10px] px-[17px] border border-zinc-900 rounded-[6px]`}>71 203 88 00</a>

                    <button className={`${styles.redBtn}`}>
                        Bog’lanish
                    </button>
                </div>
            </div>
        </nav>
    )
}
