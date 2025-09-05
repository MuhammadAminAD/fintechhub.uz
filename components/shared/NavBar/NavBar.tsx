'use client'

import Logo from '@/components/Icons/Logo'
import { styles } from '@/styles/styles'
import React from 'react'
import Menu from './Menu'

export default function NavBar() {
    return (
        <nav>
            <div className={`${styles.container} flex items-center justify-between py-4 `}>
                <Logo />

                <Menu />
                <div className='flex gap-[5px]'>
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
